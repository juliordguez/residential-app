// import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';
// import { Observable, ReplaySubject } from 'rxjs';
// import { filter } from 'rxjs/operators';
// import { ListColumn } from 'src/@fury/shared/list/list-column.model';
// import { ProveedorCreateUpdateComponent } from './proveedor-create-update/proveedor-create-update.component';
// import { Proveedor } from './proveedor-create-update/proveedor.model';
// import { fadeInRightAnimation } from 'src/@fury/animations/fade-in-right.animation';
// import { fadeInUpAnimation } from 'src/@fury/animations/fade-in-up.animation';
// import { ProveedorService } from '../../services/proveedor.service';
// import { ToastService } from 'src/app/shared/toast/toast.service';
// import { LoaderService } from 'src/app/shared/loader/loader.service';
// import { PAGE_SIZE_OPTIONS } from '../../shared/const';
// import { AuthService } from '../../services/auth.service'

// @Component({
//   selector: 'fury-proveedores',
//   templateUrl: './proveedores.component.html',
//   styleUrls: ['./proveedores.component.scss'],
//   animations: [fadeInRightAnimation, fadeInUpAnimation]
// })
// export class ProveedoresComponent implements OnInit, AfterViewInit, OnDestroy {

//     pageSize = 5;
//     pageSizeOptions = PAGE_SIZE_OPTIONS;

//   subject$: ReplaySubject<Proveedor[]> = new ReplaySubject<Proveedor[]>(1);
//   data$: Observable<Proveedor[]> = this.subject$.asObservable();
//   proveedores: Proveedor[];

//   @Input()
//   columns: ListColumn[] = [
//     { name: 'Checkbox', property: 'checkbox', visible: false },
//     { name: 'Image', property: 'image', visible: true },
//     { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
//     { name: 'Tipo Servicio', property: 'tipo_servicio', visible: true, isModelProperty: true },
//     { name: 'Teléfono', property: 'telefono', visible: true, isModelProperty: true },
//     { name: 'Correo', property: 'correo', visible: true, isModelProperty: true },
//     { name: 'Actions', property: 'actions', visible: true }
//   ] as ListColumn[];

//   dataSource: MatTableDataSource<Proveedor> | null;

//   @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
//   @ViewChild(MatSort, { static: true }) sort: MatSort;

//   constructor(
//     private dialog: MatDialog,
//     private proveedorService: ProveedorService,
//     private toast: ToastService,
//     private loader: LoaderService,
//     private cdr: ChangeDetectorRef,
//     private authService: AuthService,

//   ) {}

//     hasPermission(permiso: string): boolean {
//   return this.authService.hasPermission(permiso);
//   }

//   get visibleColumns() {
//     return this.columns.filter(column => column.visible).map(column => column.property);
//   }

//   getProveedores() {
//     const id_fraccionamiento = 1;
//     this.proveedorService.getProveedores().subscribe({
//       next: (data) => {
//         const lista = data.message.map(p => new Proveedor(p));
//         this.subject$.next(lista);
//       },
//       error: (err) => console.error('Error al cargar proveedores', err)
//     });
//   }

//   ngOnInit() {
//     this.getProveedores();
//     this.dataSource = new MatTableDataSource();

//     this.data$.pipe(filter(data => !!data)).subscribe((proveedores) => {
//       this.proveedores = proveedores;
//       this.dataSource.data = proveedores;
//     });
//   }

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   createProveedor() {
//     this.dialog.open(ProveedorCreateUpdateComponent).afterClosed().subscribe((proveedor: Proveedor) => {
//       if (proveedor) this.getProveedores();
//     });
//   }

//   updateProveedor(proveedor) {
//     this.dialog.open(ProveedorCreateUpdateComponent, { data: proveedor }).afterClosed().subscribe((actualizado) => {
//       if (actualizado) this.getProveedores();
//     });
//   }

//   deleteProveedor(proveedor: Proveedor) {
//     const id_fraccionamiento = 1;
//     const confirmed = confirm(`¿Eliminar proveedor ${proveedor.nombre}?`);
//     if (!confirmed) return;

//     this.loader.show();
//     this.proveedorService.deleteProveedor(proveedor.id_proveedor).subscribe({
//       next: () => {
//         this.getProveedores();
//         this.toast.success('Proveedor eliminado', `${proveedor.nombre} fue eliminado correctamente`);
//       },
//       error: (err) => {
//         this.toast.error('Error al eliminar proveedor', err?.error?.detail || 'No se pudo eliminar');
//       },
//       complete: () => this.loader.hide()
//     });
//   }

//   onFilterChange(value: string) {
//     if (!this.dataSource) return;
//     this.dataSource.filter = value.trim().toLowerCase();
//   }

//   getAvatarName(row: Proveedor): string {
//     return String((row.id_proveedor + 1) % 10 || 1);
//   }

//   ngOnDestroy() {}


// }








import {
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ListColumn } from 'src/@fury/shared/list/list-column.model';
import { ProveedorCreateUpdateComponent } from './proveedor-create-update/proveedor-create-update.component';
import { Proveedor } from './proveedor-create-update/proveedor.model';
import { fadeInRightAnimation } from 'src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from 'src/@fury/animations/fade-in-up.animation';
import { ProveedorService } from '../../services/proveedor.service';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { PAGE_SIZE_OPTIONS_CARDS } from '../../shared/const';
import { AuthService } from '../../services/auth.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'fury-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class ProveedoresComponent implements OnInit, OnDestroy {
  pageSize = 2;
  pageSizeOptions = PAGE_SIZE_OPTIONS_CARDS;
  pageIndex = 0;

  subject$: ReplaySubject<Proveedor[]> = new ReplaySubject<Proveedor[]>(1);
  data$: Observable<Proveedor[]> = this.subject$.asObservable();
  proveedores: Proveedor[] = [];
  paginatedData: Proveedor[] = [];

  dataSource: MatTableDataSource<Proveedor> = new MatTableDataSource<Proveedor>();

  @Input()
  columns: ListColumn[] = [
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Tipo Servicio', property: 'tipo_servicio', visible: true, isModelProperty: true },
    { name: 'Teléfono', property: 'telefono', visible: true, isModelProperty: true },
    { name: 'Correo', property: 'correo', visible: true, isModelProperty: true }
  ] as ListColumn[];

  constructor(
    private dialog: MatDialog,
    private proveedorService: ProveedorService,
    private toast: ToastService,
    private loader: LoaderService,
    private cdr: ChangeDetectorRef,
    private authService: AuthService
  ) {}

  hasPermission(permiso: string): boolean {
    return this.authService.hasPermission(permiso);
  }

  ngOnInit(): void {
    this.getProveedores();

    this.data$.pipe(filter(data => !!data)).subscribe(proveedores => {
      this.proveedores = proveedores;
      this.dataSource.data = proveedores;
      this.updatePaginatedData();
    });
  }

  getProveedores(): void {
    const id_fraccionamiento = 1;
    this.proveedorService.getProveedores().subscribe({
      next: (data) => {
        const lista = data.message.map(p => new Proveedor(p));
        this.subject$.next(lista);
      },
      error: (err) => console.error('Error al cargar proveedores', err)
    });
  }

  updatePaginatedData(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.dataSource.filteredData.slice(startIndex, endIndex);
    this.cdr.markForCheck();
  }

  onPageChange(event: any): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedData();
  }

  createProveedor(): void {
    this.dialog.open(ProveedorCreateUpdateComponent).afterClosed().subscribe((proveedor: Proveedor) => {
      if (proveedor) this.getProveedores();
    });
  }

  updateProveedor(proveedor: Proveedor): void {
    this.dialog.open(ProveedorCreateUpdateComponent, { data: proveedor }).afterClosed().subscribe((actualizado) => {
      if (actualizado) this.getProveedores();
    });
  }

  deleteProveedor(proveedor: Proveedor): void {
    const confirmed = confirm(`¿Eliminar proveedor ${proveedor.nombre}?`);
    if (!confirmed) return;

    this.loader.show();
    this.proveedorService.deleteProveedor(proveedor.id_proveedor).subscribe({
      next: () => {
        this.getProveedores();
        this.toast.success('Proveedor eliminado', `${proveedor.nombre} fue eliminado correctamente`);
      },
      error: (err) => {
        this.toast.error('Error al eliminar proveedor', err?.error?.detail || 'No se pudo eliminar');
      },
      complete: () => this.loader.hide()
    });
  }

  onFilterChange(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.updatePaginatedData();
  }

  getAvatarName(row: Proveedor): string {
    return String((row.id_proveedor + 1) % 10 || 1);
  }

  ngOnDestroy(): void {}
}
