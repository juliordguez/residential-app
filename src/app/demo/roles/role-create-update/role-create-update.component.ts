// import { Component, Inject, OnInit } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// // import { RoleService } from '../../../services/role.service';
// import { ToastService } from 'src/app/shared/toast/toast.service';

// @Component({
//   selector: 'fury-role-create-update',
//   templateUrl: './role-create-update.component.html',
//   styleUrls: ['./role-create-update.component.scss']
// })
// export class RoleCreateUpdateComponent implements OnInit {
//   form: FormGroup;
//   mode: 'create' | 'update' = 'create';

//   constructor(
//     @Inject(MAT_DIALOG_DATA) public defaults: any,
//     private dialogRef: MatDialogRef<RoleCreateUpdateComponent>,
//     private fb: FormBuilder,
//     // private roleService: RoleService,
//     private toast: ToastService
//   ) {}

//   ngOnInit() {
//     this.mode = this.defaults ? 'update' : 'create';
//     this.form = this.fb.group({
//       name_rol: [this.defaults?.name_rol || '', Validators.required],
//       description: [this.defaults?.description || '', Validators.required]
//     });
//   }

//   save() {
//     if (this.mode === 'create') {
//       // this.roleService.createRole(this.form.value).subscribe({
//       //   next: res => {
//       //     this.toast.success('Rol creado', 'El rol fue creado exitosamente');
//       //     this.dialogRef.close(res);
//       //   },
//       //   error: err => this.toast.error('Error al crear', err?.error?.detail)
//       // });
//     } else {
//       // this.roleService.updateRole(this.defaults.id_rol, this.form.value).subscribe({
//       //   next: res => {
//       //     this.toast.success('Rol actualizado', 'Los cambios fueron guardados');
//       //     this.dialogRef.close(res);
//       //   },
//       //   error: err => this.toast.error('Error al actualizar', err?.error?.detail)
//       // });
//     }
//   }
// }









import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RolService } from '../../../services/role.service';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'fury-role-create-update',
  templateUrl: './role-create-update.component.html',
  styleUrls: ['./role-create-update.component.scss']
})
export class RoleCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<RoleCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private rolService: RolService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }

    this.form = this.fb.group({
      name_rol: [this.defaults.name_rol || '', Validators.required],
      id_rol: [this.defaults.id_rol],
      description: [this.defaults.description || '', Validators.required],
      id_fraccionamiento: [this.defaults.id_fraccionamiento , Validators.required],
      id_permisos: [this.defaults.id_permisos , Validators.required],

    });
  }

  save() {
    if (this.mode === 'create') {
      this.createRol();
    } else {
      this.updateRol();
    }
  }

  createRol() {
    const payload = this.form.value;

    this.rolService.crearRol(payload).subscribe({
      next: (res) => {
        this.toast.success('Rol creado', 'Rol creado correctamente');
        this.dialogRef.close(res);
      },
      error: (err) => {
        this.toast.error('Error al crear rol', err?.error?.detail || 'Error desconocido');
        console.error(err);
      }
    });
  }

  updateRol() {
    const body = this.form.value;

    this.rolService.actualizarRol(body).subscribe({
      next: (res) => {
        this.toast.success('Rol actualizado', 'Cambios guardados correctamente');
        this.dialogRef.close(res);
      },
      error: (err) => {
        this.toast.error('Error al actualizar rol', err?.error?.detail || 'No se pudo actualizar');
        console.error(err);
      }
    });
  }

  isCreateMode() {
    return this.mode === 'create';
  }
}
