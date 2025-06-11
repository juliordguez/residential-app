// import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatPaginator, PageEvent } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { Observable, ReplaySubject } from 'rxjs';
// import { filter } from 'rxjs/operators';

// import { ListColumn } from '../../../../src/@fury/shared/list/list-column.model';
// import { MascotaCreateUpdateComponent } from './mascota-create-update/mascota-create-update.component';
// import { Mascota, GetMascota } from './mascota-create-update/mascota.model';
// import { fadeInRightAnimation } from '../../../../src/@fury/animations/fade-in-right.animation';
// import { fadeInUpAnimation } from '../../../../src/@fury/animations/fade-in-up.animation';
// import { MascotaService } from '../../services/mascota.service';
// import { LoaderService } from '../../shared/loader/loader.service';
// import { ToastService } from 'src/app/shared/toast/toast.service';
// import { PAGE_SIZE_OPTIONS } from '../../shared/const';
// import { AuthService } from '../../services/auth.service'

// @Component({
//   selector: 'fury-mascotas',
//   templateUrl: './mascotas.component.html',
//   styleUrls: ['./mascotas.component.scss'],
//   animations: [fadeInRightAnimation, fadeInUpAnimation]
// })
// export class MascotasComponent implements OnInit, AfterViewInit, OnDestroy {

//   pageSize = 5;
//   pageSizeOptions = PAGE_SIZE_OPTIONS;

//   subject$: ReplaySubject<GetMascota[]> = new ReplaySubject<GetMascota[]>(1);
//   data$: Observable<GetMascota[]> = this.subject$.asObservable();
//   mascotas: GetMascota[];

//   @Input()
//   columns: ListColumn[] = [
//     { name: 'Checkbox', property: 'checkbox', visible: false },
//     { name: 'Nombre', property: 'nombre', visible: false, isModelProperty: true },
//     { name: 'Telefono', property: 'hola', visible: true, isModelProperty: true },
//     { name: 'Tipo de mascota', property: 'tipo_mascota', visible: true, isModelProperty: true },
//     { name: 'Temperamento', property: 'temperamento', visible: true, isModelProperty: true },
//     { name: 'Tamaño', property: 'tamanho', visible: true, isModelProperty: true },
//     { name: 'Numero Casa', property: 'numero_casa', visible: true, isModelProperty: true },
//     { name: 'Edad', property: 'edad', visible: true, isModelProperty: true },
//     { name: 'Acciones', property: 'actions', visible: true }
//   ] as ListColumn[];

//   dataSource: MatTableDataSource<GetMascota> | null;

//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
//   @ViewChild(MatSort, { static: true }) sort: MatSort;

//   constructor(
//     private dialog: MatDialog,
//     private mascotaService: MascotaService,
//     private toast: ToastService,
//     private loader: LoaderService,
//     private authService: AuthService,

//   ) {}

//   hasPermission(permiso: string): boolean {
//   return this.authService.hasPermission(permiso);
//   }

//   get visibleColumns() {
//     return this.columns.filter(column => column.visible).map(column => column.property);
//   }

//   getMascotas() {
//     const id_fraccionamiento = 1; // Reemplaza con valor dinámico
//     this.mascotaService.getMascotas(id_fraccionamiento).subscribe({
//       next: (data) => {
//         const mascotas = data.message.map(m => new GetMascota(m));
//         console.log(data.message);
//         console.log(mascotas);
//         this.subject$.next(mascotas);
//       },
//       error: (err) => console.error('Error al cargar mascotas', err)
//     });
//   }

//   ngOnInit() {
//     this.getMascotas();
//     this.dataSource = new MatTableDataSource();

//     this.data$.pipe(
//       filter(data => !!data)
//     ).subscribe((mascotas) => {
//       this.mascotas = mascotas;
//       this.dataSource.data = mascotas;
//     });
//     this.loadPaginatedData();

//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   createMascota() {
//     this.dialog.open(MascotaCreateUpdateComponent).afterClosed().subscribe((mascota: GetMascota) => {
//       if (mascota) {
//         this.mascotas.unshift(new GetMascota(mascota));
//         this.subject$.next(this.mascotas);
//       }
//     });
//   }

//   editMascota(mascota: GetMascota) {
//     this.dialog.open(MascotaCreateUpdateComponent, {
//       data: mascota
//     }).afterClosed().subscribe((result) => {
//       if (result) {
//         const index = this.mascotas.findIndex(m => m.id_mascota === result.id_mascota);
//         this.mascotas[index] = new GetMascota(result);
//         this.subject$.next(this.mascotas);
//       }
//     });
//   }

//   deleteMascota(mascota: GetMascota) {
//     if (!mascota.id_mascota) {
//       this.toast.warning('ID no definido', 'No se puede eliminar esta mascota');
//       return;
//     }

//     const confirmed = confirm(`¿Seguro que deseas eliminar a ${mascota.nombre}?`);
//     if (!confirmed) return;

//     this.loader.show();

//     const id_fraccionamiento = 1; // Reemplaza con dinámico
//     this.mascotaService.deleteMascota(id_fraccionamiento, mascota.id_mascota).subscribe({
//       next: () => {
//         this.mascotas = this.mascotas.filter(m => m.id_mascota !== mascota.id_mascota);
//         this.subject$.next(this.mascotas);
//         this.toast.success('Mascota eliminada', `${mascota.nombre} fue eliminada correctamente`);
//       },
//       error: (err) => {
//         this.toast.error('Error al eliminar mascota', err?.error?.detail || 'No se pudo eliminar');
//       },
//       complete: () => this.loader.hide()
//     });
//   }

//   onFilterChange(value: string) {
//     if (!this.dataSource) return;
//     this.dataSource.filter = value.trim().toLowerCase();
//   }

//   ngOnDestroy() {}

//   pageIndex = 0;
//   paginatedData = [];

//   onPageChange(event: PageEvent) {
//   this.pageSize = event.pageSize;
//   this.pageIndex = event.pageIndex;
//   this.loadPaginatedData();
// }

//   loadPaginatedData() {
//   const start = this.pageIndex * this.pageSize;
//   const end = start + this.pageSize;
//   this.paginatedData = this.dataSource.data.slice(start, end);
// }

// onFilterChange(filter: string) {
//   // Si tienes filtrado con Fury ya hecho, esto se dispara automáticamente
//   // y debes volver a paginar con los nuevos datos:
//   this.pageIndex = 0;
//   this.loadPaginatedData();
// }
// }

import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ListColumn } from '../../../../src/@fury/shared/list/list-column.model';
import { MascotaCreateUpdateComponent } from './mascota-create-update/mascota-create-update.component';
import { Mascota, GetMascota } from './mascota-create-update/mascota.model';
import { fadeInRightAnimation } from '../../../../src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../../src/@fury/animations/fade-in-up.animation';
import { MascotaService } from '../../services/mascota.service';
import { LoaderService } from '../../shared/loader/loader.service';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { PAGE_SIZE_OPTIONS_CARDS } from '../../shared/const';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'fury-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class MascotasComponent implements OnInit, AfterViewInit, OnDestroy {

  pageSize = 2;
  pageSizeOptions = PAGE_SIZE_OPTIONS_CARDS;
  pageIndex = 0;
  paginatedData: GetMascota[] = [];

  subject$: ReplaySubject<GetMascota[]> = new ReplaySubject<GetMascota[]>(1);
  data$: Observable<GetMascota[]> = this.subject$.asObservable();
  mascotas: GetMascota[] = [];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Teléfono', property: 'hola', visible: true, isModelProperty: true },
    { name: 'Tipo de mascota', property: 'tipo_mascota', visible: true, isModelProperty: true },
    { name: 'Temperamento', property: 'temperamento', visible: true, isModelProperty: true },
    { name: 'Tamaño', property: 'tamanho', visible: true, isModelProperty: true },
    { name: 'Número Casa', property: 'numero_casa', visible: true, isModelProperty: true },
    { name: 'Edad', property: 'edad', visible: true, isModelProperty: true },
    { name: 'Acciones', property: 'actions', visible: true }
  ] as ListColumn[];

  dataSource: MatTableDataSource<GetMascota> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private mascotaService: MascotaService,
    private toast: ToastService,
    private loader: LoaderService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getMascotas();
    this.data$.pipe(filter(data => !!data)).subscribe((mascotas) => {
      this.mascotas = mascotas;
      this.dataSource.data = mascotas;
      this.pageIndex = 0;
      this.loadPaginatedData();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  getMascotas() {
    const id_fraccionamiento = 1; // Cambia a dinámico si es necesario
    this.mascotaService.getMascotas(id_fraccionamiento).subscribe({
      next: (data) => {
        const mascotas = data.message.map(m => new GetMascota(m));
        this.subject$.next(mascotas);
      },
      error: (err) => console.error('Error al cargar mascotas', err)
    });
  }

  createMascota() {
    this.dialog.open(MascotaCreateUpdateComponent).afterClosed().subscribe((mascota: GetMascota) => {
      if (mascota) {
        this.mascotas.unshift(new GetMascota(mascota));
        this.subject$.next(this.mascotas);
      }
    });
  }

  editMascota(mascota: GetMascota) {
    this.dialog.open(MascotaCreateUpdateComponent, {
      data: mascota
    }).afterClosed().subscribe((result) => {
      if (result) {
        const index = this.mascotas.findIndex(m => m.id_mascota === result.id_mascota);
        this.mascotas[index] = new GetMascota(result);
        this.subject$.next(this.mascotas);
      }
    });
  }

  deleteMascota(mascota: GetMascota) {
    if (!mascota.id_mascota) {
      this.toast.warning('ID no definido', 'No se puede eliminar esta mascota');
      return;
    }

    const confirmed = confirm(`¿Seguro que deseas eliminar a ${mascota.nombre}?`);
    if (!confirmed) return;

    this.loader.show();

    const id_fraccionamiento = 1; // Cambia si es necesario
    this.mascotaService.deleteMascota(id_fraccionamiento, mascota.id_mascota).subscribe({
      next: () => {
        this.mascotas = this.mascotas.filter(m => m.id_mascota !== mascota.id_mascota);
        this.subject$.next(this.mascotas);
        this.toast.success('Mascota eliminada', `${mascota.nombre} fue eliminada correctamente`);
      },
      error: (err) => {
        this.toast.error('Error al eliminar mascota', err?.error?.detail || 'No se pudo eliminar');
      },
      complete: () => this.loader.hide()
    });
  }

  onFilterChange(value: string) {
    if (!this.dataSource) return;
    this.dataSource.filter = value.trim().toLowerCase();
    this.pageIndex = 0;
    this.loadPaginatedData();
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadPaginatedData();
  }

  loadPaginatedData() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.dataSource.filteredData.slice(start, end);
  }

  hasPermission(permiso: string): boolean {
    return this.authService.hasPermission(permiso);
  }

  ngOnDestroy() {}
}
