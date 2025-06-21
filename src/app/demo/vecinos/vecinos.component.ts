
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LoaderService } from '../../shared/loader/loader.service';
import { ToastService } from '../../shared/toast/toast.service';
import { fadeInRightAnimation } from 'src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from 'src/@fury/animations/fade-in-up.animation';
import { PAGE_SIZE_OPTIONS } from '../../shared/const';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'fury-vecinos',
  templateUrl: './vecinos.component.html',
  styleUrls: ['./vecinos.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class VecinosComponent implements OnInit, AfterViewInit, OnDestroy {
  pageSize = 5;
  pageSizeOptions = PAGE_SIZE_OPTIONS;
  subject$: ReplaySubject<Vecino[]> = new ReplaySubject<Vecino[]>(1);
  data$: Observable<Vecino[]> = this.subject$.asObservable();
  vecinos: Vecino[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  currentPageData: Vecino[] = [];
  searchQuery: string = '';

  constructor(
    private http: HttpClient,
    private toast: ToastService,
    private loader: LoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getVecinos();
    this.data$.pipe(filter(data => !!data)).subscribe((vecinos) => {
      this.vecinos = vecinos;
      this.applyPagination();
    });
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe(() => {
      this.applyPagination();
    });
  }

  getVecinos() {
    this.loader.show();
    this.http.get<any[]>(`${environment.apiDemo}/demo/usuarios/resumen`)
      .subscribe({
        next: (data) => {
          const vecinos = data.map((item) => new Vecino(item));
          this.subject$.next(vecinos);
          this.loader.hide();
        },
        error: (err) => {
          console.error('[ERROR] al cargar vecinos:', err);
          this.toast.error('Error al cargar vecinos', err?.error?.detail || 'No se pudo cargar');
          this.loader.hide();
        }
      });
  }

  applyPagination() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
    let filtered = this.vecinos;

    if (this.searchQuery.trim()) {
      filtered = this.vecinos.filter(v =>
        v.username.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        v.nickname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        v.rol.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    this.currentPageData = filtered.slice(startIndex, endIndex);
  }

  onFilterChange(value: string) {
    this.searchQuery = value;
    this.paginator.firstPage();
    this.applyPagination();
  }

  getFotoUrl(id_user: number): string {
    return `${environment.apiDemo}/demo/usuarios/${id_user}/foto?ts=${Date.now()}`;
  }

  ngOnDestroy() {}
}

class Vecino {
  id_user: number;
  username: string;
  nickname: string;
  rol: string;
  telefono: string;
  descripcion: string;
  casas: string;
  resumen_mascotas: string;
  resumen_vehiculos: string;
  hasImageError: boolean = false;

  constructor(data: any) {
    this.id_user = data.id_user;
    this.username = data.username ?? '';
    this.nickname = data.nickname ?? '';
    this.rol = data.rol ?? '';
    this.telefono = data.telefono ?? '';
    this.descripcion = data.descripcion ?? '';
    this.casas = data.casas ?? '';
    this.resumen_mascotas = data.resumen_mascotas ?? '';
    this.resumen_vehiculos = data.resumen_vehiculos ?? '';
  }
}
