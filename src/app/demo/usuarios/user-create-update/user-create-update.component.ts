import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-user-create-update',
  templateUrl: './user-create-update.component.html',
  styleUrls: ['./user-create-update.component.scss']
})
export class UserCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  roles: any[] = [];
  casas: any[] = [];

  rolesLoaded = false;
  casasLoaded = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<UserCreateUpdateComponent>,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    if (this.defaults) {
      this.mode = 'update';
      console.log("datos para update entrantes: ", this.defaults)
    } else {
      this.defaults = {};
    }

    this.form = this.fb.group({
      email: [this.defaults.email || '', Validators.required],
      username: [this.defaults.username || '', Validators.required],
      nickname: [this.defaults.nickname || ''],
      id_role: [null, Validators.required],
      id_casas: [[], Validators.required],
      id_fraccionamiento: [1]  // fijo por ahora
    });

    this.loadRoles();
    this.loadCasas();
  }

  loadRoles(): void {
    fetch(`${environment.apiDemo}/demo/roles`)
      .then(res => res.json())
      .then(data => {
        this.roles = data;
        this.rolesLoaded = true;
        this.tryPatchForm();
        console.log('[DEBUG] Roles cargados:', this.roles);
      })
      .catch(err => console.error('[ERROR] No se pudieron cargar los roles:', err));
  }

  loadCasas(): void {
    fetch(`${environment.apiDemo}/demo/casas?id_fraccionamiento=1`)
      .then(res => res.json())
      .then(data => {
        this.casas = data;
        this.casasLoaded = true;
        this.tryPatchForm();
        console.log('[DEBUG] Casas cargadas:', this.casas);
      })
      .catch(err => console.error('[ERROR] No se pudieron cargar las casas:', err));
  }

  // tryPatchForm(): void {
  //   if (this.mode === 'update' && this.rolesLoaded && this.casasLoaded) {
  //     this.form.patchValue({
  //       id_role: this.defaults.id_role,
  //       id_casas: (this.defaults.casas || []).map(c => c.id_casa)
  //     });
  //   }
  // }





tryPatchForm(): void {
  if (
    this.mode === 'update' &&
    this.rolesLoaded &&
    this.casasLoaded &&
    this.form
  ) {
    const id_role = this.defaults.id_role;
    const id_casas = Array.isArray(this.defaults.raw_casas)
      ? this.defaults.raw_casas.map((c: any) => c.id_casa)
      : [];

    console.log('[DEBUG] patching form with:', { id_role, id_casas });

    this.form.patchValue({
      id_role,
      id_casas
    });
  }
}



  save(): void {
    const payload = this.form.value;

    if (this.mode === 'create') {
      console.log('[DEBUG] Payload para crear usuario:', payload);
      fetch(`${environment.apiDemo}/demo/usuarios`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(async res => {
          if (!res.ok) throw new Error('Error al crear usuario');
          return res.json();
        })
        .then(data => {
          console.log('[SUCCESS] Usuario creado:', data);
          this.dialogRef.close(true);
        })
        .catch(err => {
          console.error('[ERROR] Crear usuario:', err);
          alert('Error al crear usuario');
        });
    } else {
      console.log('[DEBUG] Payload para editar usuario:', payload);
      fetch(`${environment.apiDemo}/demo/usuarios/${this.defaults.user_uuid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(async res => {
          if (!res.ok) throw new Error('Error al editar usuario');
          return res.json();
        })
        .then(data => {
          console.log('[SUCCESS] Usuario actualizado:', data);
          this.dialogRef.close(true);
        })
        .catch(err => {
          console.error('[ERROR] Editar usuario:', err);
          alert('Error al actualizar usuario');
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
