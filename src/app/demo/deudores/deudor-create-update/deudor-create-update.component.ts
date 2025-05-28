import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { UserService } from '../../../services/user.services';
import { DeudorService } from '../../../services/deudor.service';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'fury-deudor-create-update',
  templateUrl: './deudor-create-update.component.html',
  styleUrls: ['./deudor-create-update.component.scss']
})
export class DeudorCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  usuarios: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<DeudorCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private deudorService: DeudorService,
    private userService: UserService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (this.defaults && this.defaults.id_deudor) {
      this.mode = 'update';
    } else {
      this.defaults = {};
      this.loadUsuarios();
    }

    this.form = this.fb.group({
      meses_deuda: [this.defaults.meses_deuda || 0, [Validators.required, Validators.min(0)]],
      cantidad_deuda: [this.defaults.cantidad_deuda || 0, [Validators.required, Validators.min(0)]],
      id_user: [this.defaults.id_user || null, this.isCreateMode() ? Validators.required : []]
    });

    console.log('[DEBUG] Deudor recibido para edición:', this.defaults);
  }

  loadUsuarios(): void {
    this.userService.getUsers().subscribe({
      next: (data: any) => {
        this.usuarios = data.message;
        console.log('[DEBUG] Usuarios cargados:', this.usuarios);
      },
      error: (err) => console.error('Error al cargar usuarios', err)
    });
  }

  save(): void {
    if (this.isCreateMode()) {
      this.createDeudor();
    } else {
      this.updateDeudor();
    }
  }

  createDeudor(): void {
    const payload = this.form.value;

    console.log('[DEBUG] Payload para crear deudor:', payload);

    this.deudorService.createDeudor(payload).subscribe({
      next: (response) => {
        this.toast.success('Deudor creado', 'Se ha registrado exitosamente');
        this.dialogRef.close(response);
      },
      error: (error) => {
        this.toast.error('Error al crear deudor', error?.error?.detail || 'Ocurrió un error inesperado');
        console.error(error);
      }
    });
  }

  updateDeudor(): void {
    const payload = {
      id_deudor: this.defaults.id_deudor,
      meses_deuda: this.form.value.meses_deuda,
      cantidad_deuda: this.form.value.cantidad_deuda
    };

    console.log('[DEBUG] Payload para actualizar deudor:', payload);

    this.deudorService.updateDeudor(payload).subscribe({
      next: (response) => {
        this.toast.success('Deudor actualizado', 'Cambios guardados correctamente');
        this.dialogRef.close(response);
      },
      error: (error) => {
        this.toast.error('Error al actualizar deudor', error?.error?.detail || 'No se pudo actualizar');
        console.error(error);
      }
    });
  }

  isCreateMode(): boolean {
    return this.mode === 'create';
  }

  isUpdateMode(): boolean {
    return this.mode === 'update';
  }

  close(): void {
    this.dialogRef.close();
  }
}

