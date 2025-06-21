import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-vehiculo-create-update',
  templateUrl: './vehiculo-create-update.component.html',
  styleUrls: ['./vehiculo-create-update.component.scss']
})
export class VehiculoCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  tipos: any[] = [];
  usuarios: any[] = [];

  tiposLoaded = false;
  usuariosLoaded = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<VehiculoCreateUpdateComponent>,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    if (this.defaults) {
      this.mode = 'update';
      console.log('[DEBUG] Editando vehículo con datos:', this.defaults);
    } else {
      this.defaults = {};
    }

    this.form = this.fb.group({
      placas: [this.defaults.placas || '', Validators.required],
      marca: [this.defaults.marca || '', Validators.required],
      modelo: [this.defaults.modelo || '', Validators.required],
      anio: [this.defaults.anio || '', Validators.required],
      color: [this.defaults.color || '', Validators.required],
      id_tipo: [null, Validators.required],
      user_uuid: [null, Validators.required]
    });

    this.loadTipos();
    this.loadUsuarios();
  }


  loadTipos(): void {
  fetch(`${environment.apiDemo}/demo/tipos-vehiculos`)
    .then(res => res.json())
    .then(data => {
      this.tipos = data;
      this.tiposLoaded = true;
      this.tryPatchForm();
      console.log('[DEBUG] Tipos cargados:', this.tipos);
    })
    .catch(err => console.error('[ERROR] No se pudieron cargar los tipos de vehículos:', err));
}



  loadUsuarios(): void {
    fetch(`${environment.apiDemo}/demo/usuarios/?id_fraccionamiento=1`)
      .then(res => res.json())
      .then(data => {
        this.usuarios = data;
        this.usuariosLoaded = true;
        this.tryPatchForm();
      })
      .catch(err => console.error('Error al cargar usuarios', err));
  }



//   tryPatchForm(): void {
//   if (
//     this.mode === 'update' &&
//     this.tiposLoaded &&
//     this.usuariosLoaded &&
//     this.form
//   ) {
//     this.form.patchValue({
//       id_tipo: this.defaults.id_tipo,
//       user_uuid: this.defaults.user_uuid
//     });
//   }
// }




tryPatchForm(): void {
  if (
    this.mode === 'update' &&
    this.tiposLoaded &&
    this.usuariosLoaded &&
    this.form
  ) {
    const patch = {
      placas: this.defaults.placas,
      marca: this.defaults.marca,
      modelo: this.defaults.modelo,
      anio: this.defaults.anio,
      color: this.defaults.color,
      id_tipo: this.defaults.id_tipo,
      user_uuid: this.defaults.user_uuid
    };

    console.log('[DEBUG] patching form with:', patch);
    this.form.patchValue(patch);
  }
}





  save(): void {
    const payload = this.form.value;
    console.log('[DEBUG] Payload enviado:', payload);

    if (this.mode === 'create') {
      fetch(`${environment.apiDemo}/demo/vehiculos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(() => this.dialogRef.close(true))
        .catch(err => {
          console.error('Error al crear vehículo', err);
          alert('Error al crear vehículo');
        });
    } else {
      fetch(`${environment.apiDemo}/demo/vehiculos/${this.defaults.id_vehiculo}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(() => this.dialogRef.close(true))
        .catch(err => {
          console.error('Error al actualizar vehículo', err);
          alert('Error al actualizar vehículo');
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
