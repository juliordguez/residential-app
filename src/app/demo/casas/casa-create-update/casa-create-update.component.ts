import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CasaService } from '../../../services/casas.service';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'fury-casa-create-update',
  templateUrl: './casa-create-update.component.html',
  styleUrls: ['./casa-create-update.component.scss']
})
export class CasaCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<CasaCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private casaService: CasaService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.mode = this.defaults && this.defaults.id ? 'update' : 'create';
    this.defaults = this.defaults || {};

    this.form = this.fb.group({
      numero_casa: [this.defaults.numero_casa || '', Validators.required],
      id_fraccionamiento: [this.defaults.id_fraccionamiento || 1, Validators.required]
    });
  }

  isCreateMode(): boolean {
    return this.mode === 'create';
  }

  save(): void {
    if (this.form.invalid) return;

    this.isCreateMode() ? this.createCasa() : this.updateCasa();
  }

  createCasa(): void {
    const payload = this.form.value;

    this.casaService.createCasa(payload).subscribe({
      next: (response) => {
        this.toast.success('Casa creada', 'Se ha creado exitosamente');
        this.dialogRef.close(response);
      },
      error: (error) => {
        this.toast.error('Error al crear casa', error?.error?.detail || 'Ocurrió un error inesperado');
        console.error(error);
      }
    });
  }

  updateCasa(): void {
    const body = {
      ...this.form.value,
      id_casa: this.defaults.id
    };

    this.casaService.updateCasa(body).subscribe({
      next: (response) => {
        this.toast.success('Casa actualizada', 'Cambios guardados correctamente');
        this.dialogRef.close(response);
      },
      error: (error) => {
        this.toast.error('Error al actualizar casa', error?.error?.detail || 'No se pudo actualizar');
        console.error(error);
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
