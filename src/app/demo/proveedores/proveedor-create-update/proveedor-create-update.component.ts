
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-proveedor-create-update',
  templateUrl: './proveedor-create-update.component.html',
  styleUrls: ['./proveedor-create-update.component.scss']
})
export class ProveedorCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';
  tipos: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ProveedorCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private toast: ToastService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loadTipos();

    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }

    this.form = this.fb.group({
      nombre_proveedor: [this.defaults.nombre_proveedor || '', Validators.required],
      id_tipo_servicio: [this.defaults.id_tipo_servicio || null, Validators.required],
      telefono: [this.defaults.telefono || ''],
      correo: [this.defaults.correo || ''],
      website: [this.defaults.website || ''],
      descripcion: [this.defaults.descripcion || '']
    });

    console.log('[DEBUG] Proveedor recibido para edición:', this.defaults);
  }

  loadTipos() {
    this.http.get<any[]>(`${environment.apiDemo}/demo/tipos_servicio`).subscribe({
      next: (data) => {
        this.tipos = data;
        console.log('[DEBUG] Tipos de servicio cargados:', this.tipos);
      },
      error: (err) => console.error('Error al cargar tipos de servicio', err)
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createProveedor();
    } else {
      this.updateProveedor();
    }
  }

  createProveedor() {
    const payload = {
      ...this.form.value,
      id_fraccionamiento: Number(localStorage.getItem('id_fraccionamiento') || 1)
    };

    this.http.post(`${environment.apiDemo}/demo/proveedores`, payload).subscribe({
      next: (res) => {
        this.toast.success('Proveedor creado', 'Se ha creado exitosamente');
        this.dialogRef.close(res);
      },
      error: (err) => {
        this.toast.error('Error al crear proveedor', err?.error?.detail || 'Ocurrió un error inesperado');
        console.error(err);
      }
    });
  }

  updateProveedor() {
    const payload = {
      ...this.form.value,
      id_fraccionamiento: Number(localStorage.getItem('id_fraccionamiento') || 1)
    };

    this.http.put(`${environment.apiDemo}/demo/proveedores/${this.defaults.id_proveedor}`, payload).subscribe({
      next: (res) => {
        this.toast.success('Proveedor modificado', 'Cambios guardados correctamente');
        this.dialogRef.close(res);
      },
      error: (err) => {
        this.toast.error('Error al modificar proveedor', err?.error?.detail || 'No se pudo actualizar');
        console.error(err);
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
