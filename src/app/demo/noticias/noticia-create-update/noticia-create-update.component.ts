import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoticiaService } from '../../../services/noticia.service';
import { ToastService } from 'src/app/shared/toast/toast.service';

@Component({
  selector: 'fury-noticia-create-update',
  templateUrl: './noticia-create-update.component.html',
  styleUrls: ['./noticia-create-update.component.scss']
})
export class NoticiaCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<NoticiaCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private noticiaService: NoticiaService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.mode = this.defaults && this.defaults.id_noticia ? 'update' : 'create';
    this.defaults = this.defaults || {};

    this.form = this.fb.group({
      titulo: [this.defaults.titulo || '', Validators.required],
      contenido: [this.defaults.contenido || '', Validators.required],
      categoria: [this.defaults.categoria || '', Validators.required],
      prioridad: [this.defaults.prioridad || '', Validators.required],
      estado: [this.defaults.estado || '', Validators.required],
      fecha_expiracion: [this.defaults.fecha_expiracion || '', Validators.required]
    });
  }

  isCreateMode(): boolean {
    return this.mode === 'create';
  }

  save(): void {
    if (this.form.invalid) return;

    this.isCreateMode() ? this.createNoticia() : this.updateNoticia();
  }

  createNoticia(): void {
    const payload = {
      ...this.form.value,
      id_fraccionamiento: 1
    };

    this.noticiaService.createNoticia(payload).subscribe({
      next: () => {
        this.toast.success('Noticia creada', 'Se ha creado exitosamente');
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.toast.error('Error al crear noticia', error?.error?.detail || 'Error inesperado');
      }
    });
  }

  updateNoticia(): void {
    const body = {
      ...this.form.value,
      id_noticia: this.defaults.id_noticia
    };

    this.noticiaService.updateNoticia(body).subscribe({
      next: () => {
        this.toast.success('Noticia actualizada', 'Cambios guardados correctamente');
        this.dialogRef.close(true);
      },
      error: (error) => {
        this.toast.error('Error al actualizar noticia', error?.error?.detail || 'No se pudo actualizar');
      }
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
