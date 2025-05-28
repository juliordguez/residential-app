import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ListColumn } from '../../../../src/@fury/shared/list/list-column.model';
import { MascotaCreateUpdateComponent } from './mascota-create-update/mascota-create-update.component';
import { Mascota } from './mascota-create-update/mascota.model';
import { fadeInRightAnimation } from '../../../../src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../../src/@fury/animations/fade-in-up.animation';
import { MascotaService } from '../../services/mascota.service';
import { LoaderService } from '../../shared/loader/loader.service';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { PAGE_SIZE_OPTIONS } from '../../shared/const';

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
  mascotas: Mascota[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Nombre', property: 'nombre', visible: true, isModelProperty: true },
    { name: 'Edad', property: 'edad', visible: true, isModelProperty: true },
    { name: 'Acciones', property: 'actions', visible: true }
  ] as ListColumn[];

  dataSource: MatTableDataSource<Mascota> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private mascotaService: MascotaService,
    private toast: ToastService,
    private loader: LoaderService
  ) {}

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  getMascotas() {
    const id_fraccionamiento = 1; // Reemplaza con valor dinámico
    this.mascotaService.getMascotas(id_fraccionamiento).subscribe({
      next: (data) => {
        const mascotas = data.message.map(m => new Mascota(m));
        console.log(mascotas)
        this.subject$.next(mascotas);
      },
      error: (err) => console.error('Error al cargar mascotas', err)
    });
  }

  ngOnInit() {
    this.getMascotas();
    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter(data => !!data)
    ).subscribe((mascotas) => {
      this.mascotas = mascotas;
      this.dataSource.data = mascotas;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createMascota() {
    this.dialog.open(MascotaCreateUpdateComponent).afterClosed().subscribe((mascota: Mascota) => {
      if (mascota) {
        this.mascotas.unshift(new Mascota(mascota));
        this.subject$.next(this.mascotas);
      }
    });
  }

  editMascota(mascota: Mascota) {
    this.dialog.open(MascotaCreateUpdateComponent, {
      data: mascota
    }).afterClosed().subscribe((result) => {
      if (result) {
        const index = this.mascotas.findIndex(m => m.id_mascota === result.id_mascota);
        this.mascotas[index] = new Mascota(result);
        this.subject$.next(this.mascotas);
      }
    });
  }

  deleteMascota(mascota: Mascota) {
    if (!mascota.id_mascota) {
      this.toast.warning('ID no definido', 'No se puede eliminar esta mascota');
      return;
    }

    const confirmed = confirm(`¿Seguro que deseas eliminar a ${mascota.nombre}?`);
    if (!confirmed) return;

    this.loader.show();

    const id_fraccionamiento = 1; // Reemplaza con dinámico
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
  }

  ngOnDestroy() {}
}
