
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    private toast: ToastService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }

    this.form = this.fb.group({
      numero_casa: [this.defaults.numero_casa || '', Validators.required]
    });
  }

  save(): void {
    const body = this.form.value;
    body.id_fraccionamiento = localStorage.getItem('id_fraccionamiento');

    if (this.mode === 'create') {
      this.http.post(`${environment.apiDemo}/demo/casas`, body).subscribe({
        next: (res) => {
          this.toast.success('Casa registrada');
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('[ERROR] al crear casa:', err);
          this.toast.error('Error al crear casa', err?.error?.detail || 'No se pudo crear');
        }
      });
    } else {
      this.http.put(`${environment.apiDemo}/demo/casas/${this.defaults.id_casa}`, body).subscribe({
        next: (res) => {
          this.toast.success('Casa actualizada');
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.error('[ERROR] al actualizar casa:', err);
          this.toast.error('Error al actualizar casa', err?.error?.detail || 'No se pudo actualizar');
        }
      });
    }
  }

  isCreateMode(): boolean {
    return this.mode === 'create';
  }

  isUpdateMode(): boolean {
    return this.mode === 'update';
  }
}
