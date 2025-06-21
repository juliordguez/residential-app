
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../../shared/loader/loader.service';
import { ToastService } from '../../shared/toast/toast.service';
import { fadeInRightAnimation } from '../../../../src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../../src/@fury/animations/fade-in-up.animation';
import { PAGE_SIZE_OPTIONS } from '../../shared/const';
import { ProveedorCreateUpdateComponent } from './proveedor-create-update/proveedor-create-update.component'; // ✅ agregado
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class ProveedoresComponent implements OnInit, AfterViewInit, OnDestroy {

  pageSize = 5;
  pageSizeOptions = PAGE_SIZE_OPTIONS;

  subject$: ReplaySubject<Proveedor[]> = new ReplaySubject<Proveedor[]>(1);
  data$: Observable<Proveedor[]> = this.subject$.asObservable();
  proveedores: Proveedor[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  currentPageData: Proveedor[] = [];
  searchQuery: string = '';

  user_uuid: string = localStorage.getItem('user_uuid') || '';
  id_fraccionamiento: string = localStorage.getItem('id_fraccionamiento') || '';

  recomendadoresCache: { [idProveedor: number]: string[] } = {};

  constructor(
    private http: HttpClient,
    private toast: ToastService,
    private loader: LoaderService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getProveedores();

    this.data$.pipe(
      filter(data => !!data)
    ).subscribe((proveedores) => {
      this.proveedores = proveedores;
      this.applyPagination();
    });
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.applyPagination();
    });
  }

  getProveedores() {
    this.loader.show();

    this.http.get<any[]>(`${environment.apiDemo}/demo/proveedores?id_fraccionamiento=${this.id_fraccionamiento}&user_uuid=${this.user_uuid}`)
      .subscribe({
        next: (data) => {
          const proveedores = data.map(item => new Proveedor(item));
          this.subject$.next(proveedores);
          this.loader.hide();
        },
        error: (err) => {
          console.error('[ERROR] al cargar proveedores:', err);
          this.toast.error('Error al cargar proveedores', err?.error?.detail || 'No se pudo cargar');
          this.loader.hide();
        }
      });
  }

  applyPagination() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    let filtered = this.proveedores;

    if (this.searchQuery.trim()) {
      filtered = this.proveedores.filter(p =>
        p.nombre_proveedor.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.descripcion?.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.nombre_tipo_servicio?.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.currentPageData = filtered.slice(startIndex, endIndex);
  }

  onFilterChange(value: string) {
    this.searchQuery = value;
    this.paginator.firstPage();
    this.applyPagination();
  }

  createProveedor() {
    const dialogRef = this.dialog.open(ProveedorCreateUpdateComponent, {
      data: null,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.toast.success('Proveedor creado correctamente');
        this.getProveedores();
      }
    });
  }

  updateProveedor(proveedor: Proveedor) {
    const dialogRef = this.dialog.open(ProveedorCreateUpdateComponent, {
      data: proveedor,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.toast.success('Proveedor actualizado correctamente');
        this.getProveedores();
      }
    });
  }

  deleteProveedor(proveedor: Proveedor) {
    const confirmed = confirm(`¿Seguro que deseas eliminar el proveedor "${proveedor.nombre_proveedor}"?`);
    if (!confirmed) return;

    this.loader.show();

    this.http.delete(`${environment.apiDemo}/demo/proveedores/${proveedor.id_proveedor}`)
      .subscribe({
        next: () => {
          this.toast.success('Proveedor eliminado exitosamente');
          this.getProveedores();
        },
        error: (err) => {
          console.error('[ERROR] al eliminar proveedor:', err);
          this.toast.error('Error al eliminar proveedor', err?.error?.detail || 'No se pudo eliminar');
          this.loader.hide();
        }
      });
  }

  toggleRecomendacion(proveedor: Proveedor) {
    if (!this.user_uuid) {
      this.toast.warning('Usuario no identificado', 'No puedes recomendar sin estar autenticado');
      return;
    }

    if (proveedor.ya_recomendado_por_user_actual) {
      this.http.delete(`${environment.apiDemo}/demo/proveedores_recomendaciones_delete?user_uuid=${this.user_uuid}&id_proveedor=${proveedor.id_proveedor}`)
        .subscribe({
          next: () => {
            this.toast.success('Recomendación eliminada');
            delete this.recomendadoresCache[proveedor.id_proveedor];
            this.getProveedores();
          },
          error: (err) => {
            console.error('[ERROR] Falló al eliminar recomendación:', err);
            this.toast.error('Error al eliminar recomendación', err?.error?.detail || 'No se pudo eliminar');
          }
        });

    } else {
      const payload = {
        user_uuid: this.user_uuid,
        id_proveedor: proveedor.id_proveedor
      };

      this.http.post(`${environment.apiDemo}/demo/proveedores/recomendaciones`, payload)
        .subscribe({
          next: () => {
            this.toast.success('Recomendación registrada');
            delete this.recomendadoresCache[proveedor.id_proveedor];
            this.getProveedores();
          },
          error: (err) => {
            console.error('[ERROR] Falló al registrar recomendación:', err);
            this.toast.error('Error al registrar recomendación', err?.error?.detail || 'No se pudo registrar');
          }
        });
    }
  }

  loadRecomendadores(id_proveedor: number): void {
    if (this.recomendadoresCache[id_proveedor] !== undefined) {
      return;
    }

    this.recomendadoresCache[id_proveedor] = [];

    this.http.get<any[]>(`${environment.apiDemo}/demo/proveedores/${id_proveedor}/recomendaciones`)
      .subscribe({
        next: (data) => {
          const usernames = data.map(r => r.username);
          this.recomendadoresCache[id_proveedor] = usernames;
        },
        error: (err) => {
          console.error('Error al obtener recomendaciones', err);
          this.recomendadoresCache[id_proveedor] = [];
        }
      });
  }

  getRecomendadoresTooltipHTML(id_proveedor: number): string {
    const cached = this.recomendadoresCache[id_proveedor];
    if (cached === undefined) {
      return 'Cargando...';
    }
    if (cached.length === 0) {
      return 'Sin recomendaciones';
    }
    return cached.join('\n');
  }

  getTipoIcon(tipo: string): string {
    switch (tipo?.toLowerCase()) {
      case 'plomería': return 'plumbing';
      case 'electricidad': return 'bolt';
      case 'jardinería': return 'yard';
      case 'seguridad': return 'security';
      case 'mantenimiento general': return 'handyman';
      default: return 'build';
    }
  }

  ngOnDestroy() {}
}

// Clase Proveedor
class Proveedor {
  id_proveedor: number;
  nombre_proveedor: string;
  descripcion?: string;
  telefono?: string;
  website?: string;
  correo?: string;
  id_tipo_servicio: number;
  nombre_tipo_servicio?: string;
  id_fraccionamiento: number;
  total_recomendaciones: number;
  ya_recomendado_por_user_actual: boolean;

  constructor(data: any) {
    this.id_proveedor = data.id_proveedor;
    this.nombre_proveedor = data.nombre_proveedor;
    this.descripcion = data.descripcion;
    this.telefono = data.telefono;
    this.website = data.website;
    this.correo = data.correo;
    this.id_tipo_servicio = data.id_tipo_servicio;
    this.nombre_tipo_servicio = data.nombre_tipo_servicio;
    this.id_fraccionamiento = data.id_fraccionamiento;
    this.total_recomendaciones = data.total_recomendaciones;
    this.ya_recomendado_por_user_actual = data.ya_recomendado_por_user_actual;
  }
}
