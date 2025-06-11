import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { Deudor } from './deudor-create-update/deudor.model';
import { DeudorCreateUpdateComponent } from './deudor-create-update/deudor-create-update.component';
import { DeudorService } from '../../services/deudor.service';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { PAGE_SIZE_OPTIONS } from '../../shared/const';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'fury-deudores',
  templateUrl: './deudores.component.html',
  styleUrls: ['./deudores.component.scss']
})
export class DeudoresComponent implements OnInit, AfterViewInit, OnDestroy {

    pageSize = 5;
    pageSizeOptions = PAGE_SIZE_OPTIONS;

  subject$: ReplaySubject<Deudor[]> = new ReplaySubject<Deudor[]>(1);
  data$: Observable<Deudor[]> = this.subject$.asObservable();
  deudores: Deudor[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Correo', property: 'correo', visible: true, isModelProperty: true },
    { name: 'Monto Adeudado', property: 'monto', visible: true, isModelProperty: true },
    { name: 'Acciones', property: 'actions', visible: true }
  ] as ListColumn[];

  dataSource: MatTableDataSource<Deudor> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private deudorService: DeudorService,
    private toast: ToastService,
    private loader: LoaderService,
    private authService: AuthService,

  ) {}

  hasPermission(permiso: string): boolean {
  return this.authService.hasPermission(permiso);
  }
  
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  getDeudores() {
    this.deudorService.getDeudores().subscribe({
      next: (data) => {
        const lista = data.message.map(d => new Deudor(d));
        this.subject$.next(lista);
      },
      error: (err) => console.error('Error al cargar deudores', err)
    });
  }

  ngOnInit() {
    this.getDeudores();
    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter(data => !!data)).subscribe((deudores) => {
      this.deudores = deudores;
      this.dataSource.data = deudores;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createDeudor() {
    this.dialog.open(DeudorCreateUpdateComponent).afterClosed().subscribe((nuevo: Deudor) => {
      if (nuevo) this.getDeudores();
    });
  }

  updateDeudor(deudor) {
    this.dialog.open(DeudorCreateUpdateComponent, { data: deudor }).afterClosed().subscribe((actualizado) => {
      if (actualizado) this.getDeudores();
    });
  }

  deleteDeudor(deudor: Deudor) {
    if (!deudor.id) {
      this.toast.warning('ID no definido', 'No se puede eliminar este deudor');
      return;
    }

    const confirmed = confirm(`¿Eliminar deudor ${deudor.nombre}?`);
    if (!confirmed) return;

    this.loader.show();
    this.deudorService.deleteDeudor(deudor.id).subscribe({
      next: () => {
        this.getDeudores();
        this.toast.success('Deudor eliminado', `${deudor.nombre} fue eliminado correctamente`);
      },
      error: (err) => {
        this.toast.error('Error al eliminar', err?.error?.detail || 'No se pudo eliminar');
      },
      complete: () => this.loader.hide()
    });
  }

  onFilterChange(value: string) {
    if (!this.dataSource) return;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  ngOnDestroy() {}
}
