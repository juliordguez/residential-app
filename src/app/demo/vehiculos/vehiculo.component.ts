import {
  Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { VehiculoCreateUpdateComponent } from './vehiculo-create-update/vehiculo-create-update.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-vehiculos',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['placas', 'marca', 'modelo', 'anio', 'color', 'tipo', 'usuario', 'actions'];
  dataSource = new MatTableDataSource<Vehiculo>();
  pageSize = 5;
  pageSizeOptions = [5, 10, 20];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  user_uuid = localStorage.getItem('user_uuid') || '';
  id_fraccionamiento = localStorage.getItem('id_fraccionamiento') || '';

  constructor(
    private http: HttpClient,
    private dialog: MatDialog,
    private toast: ToastService,
    private loader: LoaderService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.getVehiculos();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getVehiculos() {
    this.loader.show();
    this.http.get<Vehiculo[]>(`${environment.apiDemo}/demo/vehiculos/?id_fraccionamiento=${this.id_fraccionamiento}`)
      .subscribe({
        next: (data: any) => {
          const vehiculos = data.map(v => new Vehiculo(v));
          this.dataSource.data = vehiculos;
          this.loader.hide();
        },
        error: (err) => {
          this.toast.error('Error al cargar vehículos', err?.error?.detail || 'No se pudo cargar');
          this.loader.hide();
        }
      });
  }

  createVehiculo() {
    this.dialog.open(VehiculoCreateUpdateComponent).afterClosed().subscribe(result => {
      if (result) {
        this.toast.success('Vehículo registrado');
        this.getVehiculos();
      }
    });
  }

  updateVehiculo(vehiculo: Vehiculo) {
    this.dialog.open(VehiculoCreateUpdateComponent, {
      data: vehiculo
    }).afterClosed().subscribe(result => {
      if (result) {
        this.toast.success('Vehículo actualizado');
        this.getVehiculos();
      }
    });
  }

  deleteVehiculo(vehiculo: Vehiculo) {
    if (!confirm(`¿Eliminar el vehículo con placas ${vehiculo.placas}?`)) return;

    this.loader.show();
    this.http.delete(`${environment.apiDemo}/demo/vehiculos/${vehiculo.id_vehiculo}`)
      .subscribe({
        next: () => {
          this.toast.success('Vehículo eliminado');
          this.getVehiculos();
        },
        error: (err) => {
          this.toast.error('Error al eliminar vehículo', err?.error?.detail || 'No se pudo eliminar');
          this.loader.hide();
        }
      });
  }

  onFilterChange(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}

// Clase auxiliar (modelo base para la tabla)
class Vehiculo {
  id_vehiculo: number;
  placas: string;
  marca: string;
  modelo: string;
  anio: string;
  color: string;
  tipo: string;
  usuario: string;
  user_uuid: string;


  // campos extra útiles para el modal
  id_tipo: number;
  id_usuario: string;

  constructor(data: any) {
    this.id_vehiculo = data.id_vehiculo || 0;
    this.placas = data.placas || '';
    this.marca = data.marca || '';
    this.modelo = data.modelo || '';
    this.anio = data.anio || '';
    this.color = data.color || '';
    this.tipo = data.tipo || '';
    this.usuario = data.usuario || '';

    this.id_tipo = data.id_tipo || null;
    this.id_usuario = data.id_usuario || '';
    this.user_uuid = data.user_uuid || '';

  }
}
