import { UserResponse } from './../../models/response/user.model';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ListColumn } from '../../../../src/@fury/shared/list/list-column.model';
//import { Usuarios } from './old/usuarios.demo';

import { UserCreateUpdateComponent } from './user-create-update/user-create-update.component';
import { Usuario } from './user-create-update/user.model';
import { fadeInRightAnimation } from '../../../../src//@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../../src/@fury/animations/fade-in-up.animation';
import { UserService } from '../../services/user.services';

import { LoaderService } from '../../shared/loader/loader.service';
import { ToastService } from 'src/app/shared/toast/toast.service';



@Component({
  selector: 'fury-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class UsuariosComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<Usuario[]> = new ReplaySubject<Usuario[]>(1);
  data$: Observable<Usuario[]> = this.subject$.asObservable();
  users: Usuario[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Image', property: 'image', visible: true },
    { name: 'Username', property: 'username', visible: true, isModelProperty: true },
    { name: 'Email', property: 'email', visible: true, isModelProperty: true },
    { name: 'Rol', property: 'rol', visible: true, isModelProperty: true },
    { name: 'Casa', property: 'casa', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true }

  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Usuario> | null;

  Users: any[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(
              private dialog: MatDialog,
              private userService: UserService,
              private toast: ToastService,
              private loader: LoaderService
  ) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        console.log('[DEBUG] Respuesta cruda del backend:', data); // 🔍 aquí
        const usuarios = data.message.map(user => new Usuario(user));
        this.subject$.next(usuarios);
      },
      error: (err) => console.error('Error al cargar usuarios', err)
    });
    return ;
  }


  ngOnInit() {
    this.getUsers();

    this.dataSource = new MatTableDataSource();

    this.data$.pipe(
      filter(data => !!data)
    ).subscribe((Usuarios) => {
      this.users = Usuarios;
      this.dataSource.data = Usuarios;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createUsuario() {
    this.dialog.open(UserCreateUpdateComponent).afterClosed().subscribe((usuario: Usuario) => {
      /**
       * Usuario is the updated Usuario (if the user pressed Save - otherwise it's null)
       */
      if (usuario) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.users.unshift(new Usuario(usuario));
        this.subject$.next(this.users);
      }
    });
  }

  updateUsuario(Usuario) {
    console.log('[DEBUG] Usuario que se enviará al modal actualizar:', Usuario); // 👈

    this.dialog.open(UserCreateUpdateComponent, {
      data: Usuario
    }).afterClosed().subscribe((Usuario) => {
      if (Usuario) {
        const index = this.users.findIndex((existingUsuario) => existingUsuario.id === Usuario.id);
        this.users[index] = new Usuario(Usuario);
        this.subject$.next(this.users);
      }
    });
  }







deleteUsuario(usuario: Usuario) {
  console.log('[DEBUG] Usuario que se enviará a eliminación:', usuario);

  if (!usuario.user_uuid) {
    this.toast.warning('UUID no definido', 'No se puede eliminar este usuario');
    return;
  }

  const confirmed = confirm(`¿Seguro que deseas eliminar a ${usuario.username}?`);

  if (!confirmed) return;

  this.loader.show(); // 👈 Inicia el loader

  this.userService.deleteUser(usuario.user_uuid).subscribe({
    next: () => {
      this.users = this.users.filter(u => u.user_uuid !== usuario.user_uuid);
      this.subject$.next(this.users);
      this.toast.success('Usuario eliminado', `${usuario.username} fue eliminado correctamente`);
    },
    error: (err) => {
      console.error('[ERROR] Falló la eliminación del usuario:', err);
      this.toast.error('Error al eliminar usuario', err?.error?.detail || 'No se pudo eliminar el usuario');
    },
    complete: () => this.loader.hide() // 👈 Oculta el loader al finalizar
  });
}



  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }

  getAvatarName(row: Usuario): string {
    return String((row.id + 1) > 20 ? (row.id + 1) - (Math.floor(row.id / 10) * 10) : (row.id + 1));
  }

  ngOnDestroy() {
  }
}
