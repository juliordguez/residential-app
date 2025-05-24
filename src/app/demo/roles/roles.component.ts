

import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ListColumn } from '../../../../src/@fury/shared/list/list-column.model';

import { RoleCreateUpdateComponent } from './role-create-update/role-create-update.component';
import { Role } from './role-create-update/role.model';
import { fadeInRightAnimation } from '../../../../src/@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../../src/@fury/animations/fade-in-up.animation';
import { RolService } from '../../services/role.service';
import { LoaderService } from '../../shared/loader/loader.service';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'fury-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class RolesComponent implements OnInit, AfterViewInit, OnDestroy {

  subject$: ReplaySubject<Role[]> = new ReplaySubject<Role[]>(1);
  data$: Observable<Role[]> = this.subject$.asObservable();
  roles: Role[];

  @Input()
  columns: ListColumn[] = [
    { name: 'ID', property: 'id_rol', visible: true, isModelProperty: true },
    { name: 'Nombre', property: 'name_rol', visible: true, isModelProperty: true },
    { name: 'Descripción', property: 'description', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true }
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<Role> | null;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private dialog: MatDialog,
    private rolService: RolService,
    private toast: ToastService,
    private loader: LoaderService
  ) {}

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  getRoles() {
    this.rolService.getRoles().subscribe({
      next: (data) => {
        console.log('[DEBUG] Respuesta cruda del backend (roles):', data);
        const roles = data.message.map((rol) => new Role(rol));
        this.subject$.next(roles);
      },
      error: (err) => console.error('Error al cargar roles', err)
    });
  }

  ngOnInit() {
    this.getRoles();
    this.dataSource = new MatTableDataSource();

    this.data$.pipe(filter(data => !!data)).subscribe((roles) => {
      this.roles = roles;
      this.dataSource.data = roles;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createRol() {
    // this.dialog.open(RoleCreateUpdateComponent).afterClosed().subscribe((rol: Rol) => {
    //   if (rol) {
    //     this.roles.unshift(new Rol(rol));
    //     this.subject$.next(this.roles);
    //   }
    // });
  }

  updateRol(rol) {
    // console.log('[DEBUG] Rol que se enviará al modal actualizar:', rol);

    // this.dialog.open(RoleCreateUpdateComponent, {
    //   data: rol
    // }).afterClosed().subscribe((rolActualizado) => {
    //   if (rolActualizado) {
    //     const index = this.roles.findIndex((existingRol) => existingRol.id_rol === rolActualizado.id_rol);
    //     this.roles[index] = new Rol(rolActualizado);
    //     this.subject$.next(this.roles);
    //   }
    // });
  }

  deleteRol(rol: Role) {
    // console.log('[DEBUG] Rol que se enviará a eliminación:', rol);

    // if (!rol.id_rol) {
    //   this.toast.warning('ID no definido', 'No se puede eliminar este rol');
    //   return;
    // }

    // const confirmed = confirm(`¿Seguro que deseas eliminar el rol ${rol.name_rol}?`);
    // if (!confirmed) return;

    // this.loader.show();

    // this.rolService.deleteRole(rol.id_rol).subscribe({
    //   next: () => {
    //     this.roles = this.roles.filter(r => r.id_rol !== rol.id_rol);
    //     this.subject$.next(this.roles);
    //     this.toast.success('Rol eliminado', `${rol.name_rol} fue eliminado correctamente`);
    //   },
    //   error: (err) => {
    //     console.error('[ERROR] Falló la eliminación del rol:', err);
    //     this.toast.error('Error al eliminar rol', err?.error?.detail || 'No se pudo eliminar el rol');
    //   },
    //   complete: () => this.loader.hide()
    // });
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  ngOnDestroy() {}
}
