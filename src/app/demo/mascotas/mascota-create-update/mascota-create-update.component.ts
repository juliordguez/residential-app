import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MascotaService } from '../../../services/mascota.service';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'fury-mascota-create-update',
  templateUrl: './mascota-create-update.component.html',
  styleUrls: ['./mascota-create-update.component.scss']
})
export class MascotaCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<MascotaCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private mascotaService: MascotaService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    if (this.defaults && this.defaults.id_mascota) {
      this.mode = 'update';

    }

    this.form = this.fb.group({
      id_user: [this.defaults?.id_user || '', Validators.required],
      id_tipo_mascota: [this.defaults?.id_tipo_mascota || '', Validators.required],
      id_tamanho: [this.defaults?.id_tamanho || '', Validators.required],
      edad: [this.defaults?.edad || 0, Validators.required],
      id_temperamento: [this.defaults?.id_temperamento || '', Validators.required],
      nombre: [this.defaults?.nombre || '', Validators.required],
      id_mascota: [this.defaults?.id_mascota || null]
    });

    console.log("payload: ")
    console.log(this.form)
  }

  save(): void {
    const payload = this.form.value;

    if (this.mode === 'create') {
      this.mascotaService.createMascota(payload).subscribe({
        next: res => {
          this.toast.success('Mascota registrada', 'Registro exitoso');
          this.dialogRef.close(res);
        },
        error: err => {
          this.toast.error('Error al registrar', err?.error?.detail || 'Ocurrió un error');
        }
      });
    } else {
      this.mascotaService.updateMascota(payload).subscribe({
        next: res => {
          this.toast.success('Mascota actualizada', 'Cambios guardados');
          this.dialogRef.close(res);
        },
        error: err => {
          this.toast.error('Error al actualizar', err?.error?.detail || 'No se pudo guardar');
        }
      });
    }
  }

  isCreateMode(): boolean {
    return this.mode === 'create';
  }
}
