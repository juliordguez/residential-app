
// ... [IMPORTS IGUAL QUE TÚ]
import {
  AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ChangeDetectorRef
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../../shared/loader/loader.service';
import { ToastService } from '../../shared/toast/toast.service';
import { fadeInRightAnimation } from 'src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from 'src/@fury/animations/fade-in-up.animation';
import { MascotaCreateUpdateComponent } from './mascota-create-update/mascota-create-update.component';
import { PAGE_SIZE_OPTIONS } from '../../shared/const';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class MascotasComponent implements OnInit, AfterViewInit, OnDestroy {
  pageSize = 5;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  subject$: ReplaySubject<Mascota[]> = new ReplaySubject<Mascota[]>(1);
  data$: Observable<Mascota[]> = this.subject$.asObservable();
  mascotas: Mascota[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  currentPageData: Mascota[] = [];
  searchQuery: string = '';

  user_uuid: string = localStorage.getItem('user_uuid') || '';
  id_fraccionamiento: string = localStorage.getItem('id_fraccionamiento') || '';

  constructor(
    private http: HttpClient,
    private toast: ToastService,
    private loader: LoaderService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getMascotas();
    this.data$.pipe(filter(data => !!data)).subscribe((mascotas) => {
      console.log('[DEBUG] Lista de objetos Mascota mapeados (snapshot) inicio noOnInit:', JSON.parse(JSON.stringify(mascotas)));

      this.mascotas = mascotas;
      console.log('[DEBUG] Lista de objetos Mascota mapeados (snapshot) final noOnInit:', JSON.parse(JSON.stringify(this.mascotas)));

      this.applyPagination();
    });
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.applyPagination();
    });
  }

  getMascotas() {
    this.loader.show();
    this.http.get<any[]>(`${environment.apiDemo}/demo/mascotas?id_fraccionamiento=${this.id_fraccionamiento}`)
      .subscribe({
        next: (data) => {
          console.log('[DEBUG] Datos crudos recibidos del backend:', data);

          const mascotas = data.map((item, index) => {
            console.log(`[DEBUG] Item #${index} antes del mapeo:`, item);
            const mascota = new Mascota(item);
            // 👇 Solo esta línea añadida
            mascota.isOwner = mascota.user_uuid === this.user_uuid;
            console.log(`[DEBUG] Mascota mapeada #${index}:`, mascota);
            return mascota;
          });

          console.log('[DEBUG] Lista final de objetos Mascota mapeados:', mascotas);
          console.log('[DEBUG] Lista final de objetos Mascota mapeados (snapshot):', JSON.parse(JSON.stringify(mascotas)));

          this.subject$.next(mascotas);
          this.loader.hide();
        },
        error: (err) => {
          console.error('[ERROR] al cargar mascotas:', err);
          this.toast.error('Error al cargar mascotas', err?.error?.detail || 'No se pudo cargar');
          this.loader.hide();
        }
      });
  }

  applyPagination() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    let filtered = this.mascotas;

    if (this.searchQuery.trim()) {
      filtered = this.mascotas.filter(m =>
        m.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        m.tipo?.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        m.descripcion?.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.currentPageData = filtered.slice(startIndex, endIndex);
    console.log('[DEBUG] Lista de objetos Mascota mapeados (snapshot) paginacion aplicada:', JSON.parse(JSON.stringify(this.currentPageData)));
  }

  onFilterChange(value: string) {
    this.searchQuery = value;
    this.paginator.firstPage();
    this.applyPagination();
  }

  createMascota() {
    const dialogRef = this.dialog.open(MascotaCreateUpdateComponent, {
      data: null,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.toast.success('Mascota registrada');
        this.getMascotas();
      }
    });
  }

  updateMascota(mascota: Mascota) {
    console.log('[DEBUG] Enviando a modal:', mascota);

    const dialogRef = this.dialog.open(MascotaCreateUpdateComponent, {
      data: mascota,
      width: '600px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.toast.success('Mascota actualizada');
        this.getMascotas();
      }
    });
  }

  deleteMascota(mascota: Mascota) {
    const confirmed = confirm(`¿Seguro que deseas eliminar a "${mascota.nombre}"?`);
    if (!confirmed) return;

    this.loader.show();

    this.http.delete(`${environment.apiDemo}/demo/mascotas/${mascota.id_mascota}?user_uuid=${this.user_uuid}`)
      .subscribe({
        next: () => {
          this.toast.success('Mascota eliminada exitosamente');
          this.getMascotas();
        },
        error: (err) => {
          console.error('[ERROR] al eliminar mascota:', err);
          this.toast.error('Error al eliminar mascota', err?.error?.detail || 'No se pudo eliminar');
          this.loader.hide();
        }
      });
  }

  getFotoUrl(id_mascota: number): string {
    return `${environment.apiDemo}/demo/mascotas/${id_mascota}/foto?ts=${Date.now()}`;
  }

  ngOnDestroy() {}
}

// 🐾 Clase Mascota
class Mascota {
  id_mascota: number;
  hasImageError: boolean = false;
  isOwner: boolean = false; // 👈 Añadido para control visual

  nombre: string;
  tipo: string;
  id_tipo: number;
  raza: string;
  id_raza: number;
  color: string;
  id_color: number;
  descripcion: string;
  id_casa: number;
  casa: string;
  user_uuid: string;
  duenio: string;
  fecha_nacimiento?: string;

  constructor(data: any) {
    console.log('[DEBUG] Constructor Mascota() - data recibido:', data);

    const idParsed = parseInt((data.id_mascota ?? '').toString().trim(), 10);
    this.id_mascota = isNaN(idParsed) ? null : idParsed;

    this.nombre = data.nombre_mascota ?? '';
    this.tipo = data.nombre_tipo ?? '';
    this.id_tipo = parseInt((data.id_tipo ?? '').toString(), 10) || 0;
    this.raza = data.nombre_raza ?? '';
    this.id_raza = parseInt((data.id_raza ?? '').toString(), 10) || 0;
    this.color = data.nombre_color ?? '';
    this.id_color = parseInt((data.id_color ?? '').toString(), 10) || 0;
    this.descripcion = data.descripcion ?? '';
    this.id_casa = parseInt((data.id_casa ?? '').toString(), 10) || 0;
    this.casa = data.numero_casa ?? '';
    this.user_uuid = data.user_uuid ?? '';
    this.duenio = data.nickname ?? '';
    this.fecha_nacimiento = data.fecha_nacimiento ?? null;

    console.log('[DEBUG] Mascota mapeada:', this);
  }
}
