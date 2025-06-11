
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { RolService } from '../../../services/role.service';
import { UserService } from '../../../services/user.services';
import { CasaService } from '../../../services/casas.service';
import { ToastService } from 'src/app/shared/toast/toast.service';


@Component({
  selector: 'fury-user-create-update',
  templateUrl: './user-create-update.component.html',
  styleUrls: ['./user-create-update.component.scss']
})
export class UserCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  roles: any[] = [];
  casas: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<UserCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private rolService: RolService,
    private userService: UserService,
    private casasService: CasaService,
    private toast: ToastService

  ) {}


  ngOnInit() {
  this.loadRoles();
  this.loadCasas();

  if (this.defaults) {
    this.mode = 'update';
  } else {
    this.defaults = {};
  }

  this.form = this.fb.group({
    email: [this.defaults.email || '', Validators.required],
    nick_name: [this.defaults.nick_name || ''],
    username: [this.defaults.username || '', this.isCreateMode() ? Validators.required : []],
    id_casa: [this.defaults.id_casa || null, Validators.required],
    id_rol: [this.defaults.id_rol || null, Validators.required]
  });
}




loadRoles() {
  this.rolService.getRoles().subscribe({
    next: (data: any) => {
      this.roles = data.message;  // ✅ SOLO el array
    },
    error: (err) => console.error('Error al cargar roles', err)
  });
}



loadCasas() {
  this.casasService.getCasas().subscribe({
    next: (data: any) => {
      this.casas = data.message;
    },
    error: (err) => console.error('Error al cargar casas', err)
  });
}



  save() {
    if (this.mode === 'create') {
      this.createUser();
    } else {
      this.updateUser();
    }
  }


createUser() {
  const user = this.form.value;

  const payload = {
    email: user.email,
    username: user.username,
    id_casa: user.id_casa,
    id_rol: user.id_rol,
    id_fraccionamiento: 1
  };

  this.userService.createUser(payload).subscribe({
    next: (response) => {
    this.toast.success('Usuario creado', 'Se ha creado exitosamente');
      this.dialogRef.close(response);
    },
    error: (error) => {
      this.toast.error('Error al crear usuario', error?.error?.detail || 'Ocurrió un error inesperado');
      console.error(error);
    }
  });
}



updateUser() {
  const body = this.form.value;

  console.log('[DEBUG] Body para PUT:', body);
  console.log('[DEBUG] UUID recibido:', this.defaults.user_uuid);  // 👈 esta línea

  this.userService.updateUser(this.defaults.user_uuid, body).subscribe({
    next: (response) => {
      this.dialogRef.close(response)
      this.toast.success('Usuario modificado', 'Cambios guardados correctamente');

    },
    error: (error) => {
      console.error('Error al actualizar usuario:', error)
      this.toast.error('Error al modificar usuario', error?.error?.detail || 'No se pudo actualizar');
    }
  });
}




  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
