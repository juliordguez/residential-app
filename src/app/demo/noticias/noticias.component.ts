import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { NoticiaCreateUpdateComponent } from './noticia-create-update/noticia-create-update.component';
import { Noticia } from './noticia-create-update/noticia.model';
import { NoticiaService } from '../../services/noticia.service';
import { LoaderService } from '../../shared/loader/loader.service';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { PAGE_SIZE_OPTIONS } from '../../shared/const';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'fury-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit, AfterViewInit, OnDestroy {

    pageSize = 5;
    pageSizeOptions = PAGE_SIZE_OPTIONS;

  subject$: ReplaySubject<Noticia[]> = new ReplaySubject<Noticia[]>(1);
  data$: Observable<Noticia[]> = this.subject$.asObservable();
  noticias: Noticia[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Título', property: 'titulo', visible: true, isModelProperty: true },
    { name: 'Categoría', property: 'categoria', visible: true, isModelProperty: true },
    { name: 'Prioridad', property: 'prioridad', visible: true, isModelProperty: true },
    { name: 'Expira', property: 'fecha_expiracion', visible: true, isModelProperty: true },
    { name: 'Acciones', property: 'actions', visible: true }
  ] as ListColumn[];

  dataSource: MatTableDataSource<Noticia> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private noticiaService: NoticiaService,
    private toast: ToastService,
    private loader: LoaderService,
    private authService: AuthService,

  ) {}

    hasPermission(permiso: string): boolean {
  return this.authService.hasPermission(permiso);
  }

  isDate(value: any): boolean {
    return (
      typeof value === 'string' &&
      !isNaN(Date.parse(value)) &&
      value.includes('T') // Esto ayuda a filtrar valores ISO como "2025-05-20T23:59:59"
    );
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  getNoticias() {
    this.noticiaService.getNoticias().subscribe({
      next: (data) => {
        const noticias = data.message.map(n => new Noticia(n));
        this.subject$.next(noticias);
      },
      error: (err) => console.error('Error al cargar noticias', err)
    });
  }

  ngOnInit() {
    this.getNoticias();
    this.dataSource = new MatTableDataSource();
    this.data$.pipe(filter(data => !!data)).subscribe((noticias) => {
      this.noticias = noticias;
      this.dataSource.data = noticias;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createNoticia() {
    this.dialog.open(NoticiaCreateUpdateComponent).afterClosed().subscribe((noticia: Noticia) => {
      if (noticia) this.getNoticias();
    });
  }

  updateNoticia(noticia) {
    this.dialog.open(NoticiaCreateUpdateComponent, { data: noticia }).afterClosed().subscribe((updated) => {
      if (updated) this.getNoticias();
    });
  }

  deleteNoticia(noticia: Noticia) {
    if (!noticia.id_noticia) {
      this.toast.warning('ID no definido', 'No se puede eliminar esta noticia');
      return;
    }

    const confirmed = confirm(`¿Seguro que deseas eliminar la noticia "${noticia.titulo}"?`);
    if (!confirmed) return;

    this.loader.show();
    this.noticiaService.deleteNoticia(noticia.id_noticia).subscribe({
      next: () => {
        this.getNoticias();
        this.toast.success('Noticia eliminada', `"${noticia.titulo}" fue eliminada correctamente`);
      },
      error: (err) => {
        this.toast.error('Error al eliminar noticia', err?.error?.detail || 'No se pudo eliminar');
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
