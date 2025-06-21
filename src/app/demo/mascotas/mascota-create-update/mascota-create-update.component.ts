
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/shared/toast/toast.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-mascota-create-update',
  templateUrl: './mascota-create-update.component.html',
  styleUrls: ['./mascota-create-update.component.scss']
})
export class MascotaCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  tipos: any[] = [];
  razas: any[] = [];
  colores: any[] = [];
  casas: any[] = [];
  casasFiltradas: any[] = [];

  isOwner: boolean = false;
  selectedImageFile: File | null = null;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<MascotaCreateUpdateComponent>,
    private fb: UntypedFormBuilder,
    private http: HttpClient,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    console.log('[DEBUG] Enviado a modal:', this.defaults);
    this.mode = this.defaults ? 'update' : 'create';

    this.form = this.fb.group({
      nombre: ['', Validators.required],
      id_tipo: ['', Validators.required],
      id_raza: ['', Validators.required],
      id_color: ['', Validators.required],
      id_casa: ['', Validators.required],
      descripcion: [''],
      foto: [null]
    });

    this.loadCatalogos();
    this.loadCasas();
  }

  loadCatalogos() {
    this.http.get<any>(`${environment.apiDemo}/demo/mascotas/catalogos`).subscribe({
      next: (res) => {
        this.tipos = res.tipos;
        this.razas = res.razas;
        this.colores = res.colores;
        console.log('[DEBUG] Catálogos cargados:', res);
        this.patchFormIfReady();
      },
      error: (err) => {
        this.toast.error('Error al cargar catálogos', err?.error?.detail || 'Catálogo incompleto');
      }
    });
  }

  loadCasas() {
    const casasStr = localStorage.getItem('casas');
    const user_uuid = localStorage.getItem('user_uuid') || '';
    const userCasas = casasStr ? JSON.parse(casasStr) : [];
    this.casas = userCasas;
    console.log('[DEBUG] Casas cargadas:', this.casas);

    const duenio = this.defaults?.user_uuid;
    this.isOwner = this.mode === 'create' || duenio === user_uuid;
    console.log('[DEBUG] Usuario logueado:', user_uuid);
    console.log('[DEBUG] Dueño de la mascota:', duenio);
    console.log('[DEBUG] ¿Es dueño?', this.isOwner);

    this.casasFiltradas = this.isOwner
      ? this.casas
      : this.defaults?.id_casa
        ? [{ id_casa: this.defaults.id_casa, numero_casa: this.defaults.casa }]
        : [];

    console.log('[DEBUG] Casas filtradas para mostrar:', this.casasFiltradas);
    this.patchFormIfReady();
  }

  patchFormIfReady() {
    if (
      this.mode === 'update' &&
      this.defaults &&
      this.tipos.length > 0 &&
      this.razas.length > 0 &&
      this.colores.length > 0
    ) {
      console.log('[DEBUG] Ejecutando patchValue() con:', this.defaults);
      this.form.patchValue({
        nombre: this.defaults.nombre,
        id_tipo: this.defaults.id_tipo,
        id_raza: this.defaults.id_raza,
        id_color: this.defaults.id_color,
        id_casa: this.defaults.id_casa,
        descripcion: this.defaults.descripcion || ''
      });
    }
  }

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImageFile = file;
    }
  }

  save(): void {
    const formData = new FormData();
    const formValue = this.form.value;

    formData.append('nombre_mascota', formValue.nombre);
    formData.append('id_tipo', formValue.id_tipo);
    formData.append('id_raza', formValue.id_raza);
    formData.append('id_color', formValue.id_color);
    formData.append('id_casa', formValue.id_casa);
    formData.append('descripcion', formValue.descripcion || '');
    formData.append('fecha_nacimiento', new Date().toISOString());
    formData.append('id_fraccionamiento', localStorage.getItem('id_fraccionamiento') || '');
    // formData.append('user_uuid', localStorage.getItem('user_uuid') || '');

    formData.append(
      'user_uuid',
      this.mode === 'create'
        ? localStorage.getItem('user_uuid') || ''
        : this.defaults?.user_uuid || ''
    );



    if (this.selectedImageFile) {
      formData.append('foto', this.selectedImageFile);
    }

    if (this.mode === 'create') {
      this.http.post(`${environment.apiDemo}/demo/mascotas`, formData).subscribe({
        next: (res) => {
          this.toast.success('Mascota registrada');
          this.dialogRef.close(res);
        },
        error: (err) => {
          this.toast.error('Error al registrar mascota', err?.error?.detail || 'Error inesperado');
        }
      });
    } else {
      this.http.put(`${environment.apiDemo}/demo/mascotas/${this.defaults.id_mascota}`, formData).subscribe({
        next: (res) => {
          this.toast.success('Mascota actualizada');
          this.dialogRef.close(res);
        },
        error: (err) => {
          this.toast.error('Error al actualizar mascota', err?.error?.detail || 'Error inesperado');
        }
      });
    }
  }

  eliminar(): void {
    if (!confirm('¿Seguro que deseas eliminar esta mascota?')) return;

    this.http.delete(`${environment.apiDemo}/demo/mascotas/${this.defaults.id_mascota}`).subscribe({
      next: () => {
        this.toast.success('Mascota eliminada');
        this.dialogRef.close({ deleted: true });
      },
      error: (err) => {
        this.toast.error('Error al eliminar mascota', err?.error?.detail || 'No se pudo eliminar');
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
