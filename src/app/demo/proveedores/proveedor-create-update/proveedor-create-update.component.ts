import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { ProveedorService } from '../../../services/proveedor.service';

@Component({
  selector: 'fury-proveedor-create-update',
  templateUrl: './proveedor-create-update.component.html',
  styleUrls: ['./proveedor-create-update.component.scss']
})
export class ProveedorCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ProveedorCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private proveedorService: ProveedorService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (this.defaults && this.defaults.id_proveedor) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }

    this.form = this.fb.group({
      nombre: [this.defaults.nombre || '', Validators.required],
      tipo_servicio: [this.defaults.tipo_servicio || '', Validators.required],
      telefono: [this.defaults.telefono || '', Validators.required],
      correo: [this.defaults.correo || '', Validators.required],
      url_imagen: [this.defaults.url_imagen || '']
    });
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  save(): void {
    if (this.isCreateMode()) {
      this.createProveedor();
    } else {
      this.updateProveedor();
    }
  }

  createProveedor(): void {
    const payload = {
      ...this.form.value,
      id_fraccionamiento: 1
    };

    this.proveedorService.createProveedor(payload).subscribe({
      next: (response) => {
        this.toast.success('Proveedor creado', 'Se ha creado exitosamente');
        this.dialogRef.close(response);
      },
      error: (error) => {
        this.toast.error('Error al crear proveedor', error?.error?.detail || 'Error inesperado');
      }
    });
  }

  updateProveedor(): void {
    const payload = {
      ...this.form.value,
      id_proveedor: this.defaults.id_proveedor
    };

    this.proveedorService.updateProveedor(payload).subscribe({
      next: (response) => {
        this.toast.success('Proveedor actualizado', 'Cambios guardados correctamente');
        this.dialogRef.close(response);
      },
      error: (error) => {
        this.toast.error('Error al actualizar proveedor', error?.error?.detail || 'Error inesperado');
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
