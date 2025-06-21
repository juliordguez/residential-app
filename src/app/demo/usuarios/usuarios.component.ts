
import {
  Component, OnInit, AfterViewInit, ViewChild, ChangeDetectorRef
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { UserCreateUpdateComponent } from './user-create-update/user-create-update.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'fury-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['username','nickname', 'email', 'rol', 'casa', 'actions'];
  dataSource = new MatTableDataSource<Usuario>();
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
    this.getUsuarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getUsuarios() {
    this.loader.show();
    this.http.get<Usuario[]>(
      `${environment.apiDemo}/demo/usuarios/?id_fraccionamiento=${this.id_fraccionamiento}`
    ).subscribe({
      next: (data: any) => {
        const usuarios = data.map(u => new Usuario(u));
        this.dataSource.data = usuarios;
        this.loader.hide();
      },
      error: (err) => {
        this.toast.error('Error al cargar usuarios', err?.error?.detail || 'No se pudo cargar');
        this.loader.hide();
      }
    });
  }

  createUsuario() {
    this.dialog.open(UserCreateUpdateComponent).afterClosed().subscribe(result => {
      if (result) {
        this.toast.success('Usuario registrado');
        this.getUsuarios();
      }
    });
  }

  updateUsuario(usuario: Usuario) {
    this.dialog.open(UserCreateUpdateComponent, {
      data: usuario
    }).afterClosed().subscribe(result => {
      if (result) {
        this.toast.success('Usuario actualizado');
        this.getUsuarios();
      }
    });
  }

  deleteUsuario(usuario: Usuario) {
    if (!confirm(`¿Eliminar a ${usuario.username}?`)) return;

    this.loader.show();
    this.http.delete(`${environment.apiDemo}/demo/usuarios/${usuario.user_uuid}`)
      .subscribe({
        next: () => {
          this.toast.success('Usuario eliminado');
          this.getUsuarios();
        },
        error: (err) => {
          this.toast.error('Error al eliminar usuario', err?.error?.detail || 'No se pudo eliminar');
          this.loader.hide();
        }
      });
  }

  onFilterChange(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
  }

  getAvatarName(row: Usuario): string {
    return String((row.user_uuid || '').substring(0, 2));
  }
}






class Usuario {
  user_uuid: string;
  username: string;
  nickname: string;
  email: string;
  nombre_rol: string;
  casas: string;

  // 👉 los agregamos para el modal
  id_role: number;
  raw_casas: any[];

  constructor(data: any) {
    this.user_uuid = data.user_uuid || '';
    this.username = data.username || '';
    this.nickname = data.nickname || '';
    this.email = data.email || '';
    this.nombre_rol = data.nombre_rol || '';

    this.id_role = data.id_role || null;  // <-- aquí sí se conserva
    this.raw_casas = data.casas || [];    // <-- importante

    this.casas = Array.isArray(data.casas)
      ? data.casas.map(c => c.numero_casa).join(', ')
      : '';
  }
}
