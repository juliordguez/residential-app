import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ListColumn } from '../../../../src/@fury/shared/list/list-column.model';
import { CasaCreateUpdateComponent } from './casa-create-update/casa-create-update.component';
import { Casa } from './casa-create-update/casa.model';
import { fadeInRightAnimation } from '../../../../src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../../src/@fury/animations/fade-in-up.animation';
import { CasaService } from '../../services/casas.service';
import { LoaderService } from '../../shared/loader/loader.service';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { PAGE_SIZE_OPTIONS } from '../../shared/const';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'fury-casas',
  templateUrl: './casas.component.html',
  styleUrls: ['./casas.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class CasasComponent implements OnInit, AfterViewInit, OnDestroy {

  pageSize = 5;
  pageSizeOptions = PAGE_SIZE_OPTIONS;

  subject$: ReplaySubject<Casa[]> = new ReplaySubject<Casa[]>(1);
  data$: Observable<Casa[]> = this.subject$.asObservable();
  casas: Casa[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Image', property: 'image', visible: true },
    { name: 'Número', property: 'numero_casa', visible: true, isModelProperty: true },
    { name: 'Fraccionamiento', property: 'id_fraccionamiento', visible: false, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true }
  ] as ListColumn[];  // 👈 mismo que en usuarios

  dataSource: MatTableDataSource<Casa> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private casaService: CasaService,
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

  getCasas() {
    this.casaService.getCasas().subscribe({
      next: (data) => {
        const casas = data.message.map(c => new Casa(c));
        this.subject$.next(casas);
      },
      error: (err) => console.error('Error al cargar casas', err)
    });
  }

  ngOnInit() {
    this.getCasas();
    this.dataSource = new MatTableDataSource();
    this.data$.pipe(filter(data => !!data)).subscribe((casas) => {
      this.casas = casas;
      this.dataSource.data = casas;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createCasa() {
    this.dialog.open(CasaCreateUpdateComponent).afterClosed().subscribe((casa: Casa) => {
      if (casa) {
        this.casas.unshift(new Casa(casa));
        this.subject$.next(this.casas);
      }
    });
  }

  updateCasa(casa) {
    this.dialog.open(CasaCreateUpdateComponent, { data: casa }).afterClosed().subscribe((casa) => {
      this.getCasas();
      if (casa) {
        const index = this.casas.findIndex(c => c.id === casa.id);
        this.casas[index] = new Casa(casa);
        this.subject$.next([...this.casas]);
      }
    });
  }


  deleteCasa(casa: Casa) {
    if (!casa.id) {
      this.toast.warning('UUID no definido', 'No se puede eliminar esta casa');
      return;
    }

    const confirmed = confirm(`¿Eliminar casa ${casa.numero_casa}?`);
    if (!confirmed) return;

    this.loader.show();
    this.casaService.deleteCasa(casa.id).subscribe({
      next: () => {
        this.casas = this.casas.filter(c => c.id !== casa.id);
        this.subject$.next(this.casas);
        this.toast.success('Casa eliminada', `Casa ${casa.numero_casa} fue eliminada.`);
      },
      error: (err) => {
        this.toast.error('Error al eliminar', err?.error?.detail || 'No se pudo eliminar');
      },
      complete: () => this.loader.hide()
    });
  }

  onFilterChange(value) {
    if (!this.dataSource) return;
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getAvatarName(row: Casa): string {
    return String((row.id + 1) % 10 || 1);
  }

  ngOnDestroy() {}
}
