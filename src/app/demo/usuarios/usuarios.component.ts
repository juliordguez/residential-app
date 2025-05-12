import { UserResponse } from './../../models/response/user.model';
import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ListColumn } from '../../../../src/@fury/shared/list/list-column.model';
import { Usuarios } from './usuarios.demo';

import { UserCreateUpdateComponent } from './user-create-update/user-create-update.component';
import { Usuario } from './user-create-update/user.model';
import { fadeInRightAnimation } from '../../../../src//@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../../src/@fury/animations/fade-in-up.animation';
import { UserService } from '../../services/user.services';

@Component({
  selector: 'fury-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class UsuariosComponent implements OnInit, AfterViewInit, OnDestroy {
  /**
   * Simulating a service with HTTP that returns Observables
   * You probably want to remove this and do all requests in a service with HTTP
   */
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

  // constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
  //             private dialogRef: MatDialogRef<UserCreateUpdateComponent>,
  //             private fb: UntypedFormBuilder,
  //             private rolService: RolService,
  //             private userService: UserService
  //           ) {
  // }

  constructor(
              private dialog: MatDialog,
              private userService: UserService,
  ) {
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  /**
   * Example on how to get data and pass it to the table - usually you would want a dedicated service with a HTTP request for this
   * We are simulating this request here.
   */
  getData() {

    return of(Usuarios.map(usuario => new Usuario(usuario)));
  }

  getUsers() {
    this.userService.getUsers().subscribe({
      next: (data) => {
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
    this.dialog.open(UserCreateUpdateComponent, {
      data: Usuario
    }).afterClosed().subscribe((Usuario) => {
      /**
       * Usuario is the updated Usuario (if the user pressed Save - otherwise it's null)
       */
      if (Usuario) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        const index = this.users.findIndex((existingUsuario) => existingUsuario.id === Usuario.id);
        this.users[index] = new Usuario(Usuario);
        this.subject$.next(this.users);
      }
    });
  }

  deleteUsuario(Usuario) {
    /**
     * Here we are updating our local array.
     * You would probably make an HTTP request here.
     */
    this.users.splice(this.users.findIndex((existingUsuario) => existingUsuario.id === Usuario.id), 1);
    this.subject$.next(this.users);
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
