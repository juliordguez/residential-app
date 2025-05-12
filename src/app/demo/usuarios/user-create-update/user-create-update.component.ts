import { Roles } from './../rol.demo';
import { Casas } from './../casas.demo';
import { Fraccionamientos } from './../fraccionamiento.demo';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from './user.model';
import { RolService } from '../../../services/role.service';
import { UserService } from '../../../services/user.services';

@Component({
  selector: 'fury-user-create-update',
  templateUrl: './user-create-update.component.html',
  styleUrls: ['./user-create-update.component.scss']
})
export class UserCreateUpdateComponent {
  static id = 100;

  roles: any[] = [];

  casas = Casas;

  fraccionamientos = Fraccionamientos;

  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<UserCreateUpdateComponent>,
              private fb: UntypedFormBuilder,
              private rolService: RolService,
              private userService: UserService
            ) {
  }

  ngOnInit() {

    this.loadRoles();

    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as Usuario;
    }

    this.form = this.fb.group({
      id: [UserCreateUpdateComponent.id++],
      username: [this.defaults.username || '',],
      rol: [this.defaults.rol || ''],
      casa: this.defaults.casa || '',
      name_fraccionamiento: this.defaults.name_fraccionamiento || '',
      email: this.defaults.email || '',
      phoneNumber: this.defaults.phoneNumber || '',
    });
  }

  loadRoles() {
    this.rolService.getRoles().subscribe({
      next: (data) => this.roles = data,
      error: (err) => console.error('Error al cargar roles', err)
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createUser();
    } else if (this.mode === 'update') {
      this.updateUser();
    }
  }

  createUser() {
    const user = this.form.value;

    console.log(`usuario: ${JSON.stringify(user)}`);
    this.userService.createUser(user).subscribe({
      next: (response) => {
        this.dialogRef.close(response); // cierras el modal y envías la respuesta
      },
      error: (error) => {
        console.error('Error al crear el cliente:', error);
      }
    });
    // this.dialogRef.close(customer);
  }

  updateUser() {
    const user = this.form.value;
    user.id = this.defaults.id;

    console.log(`usuario: ${JSON.stringify(user)}`);
    this.userService.updateUser(user.id, user).subscribe({
      next: (response) => {
        this.dialogRef.close(response); // cierras el modal y envías la respuesta
      },
      error: (error) => {
        console.error('Error al crear el cliente:', error);
      }
    });

    this.dialogRef.close(user);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
