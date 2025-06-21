


import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'fury-zona-comun-create-update',
  templateUrl: './zona-comun-create-update.component.html',
  styleUrls: ['./zona-comun-create-update.component.scss']
})
export class ZonaComunCreateUpdateComponent implements OnInit {
  form: UntypedFormGroup;
  mode: 'create' | 'update' = 'create';

  username: string;
  nicknameUsuario: string;
  numero_casa: string;
  user_uuid_logged: string;
  isOwner: boolean = false;

  casas: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<ZonaComunCreateUpdateComponent>,
    private fb: UntypedFormBuilder
  ) {}



ngOnInit() {
  this.user_uuid_logged = localStorage.getItem('user_uuid') || '';
  this.username = localStorage.getItem('username') || '';
  this.nicknameUsuario = localStorage.getItem('nickname') || '';
  this.numero_casa = localStorage.getItem('numero_casa') || '';

  console.log("defaults: ", this.defaults)

  if (this.defaults && this.defaults.modo == "EDITAR") {
    this.mode = 'update';
    this.username = this.defaults.username || this.username;
    this.nicknameUsuario = this.defaults.nickname || this.nicknameUsuario;
    this.numero_casa = this.defaults.numero_casa || '';
    this.isOwner = this.defaults.user_uuid === this.user_uuid_logged;

    // 👉 SOLO para update → casas = una sola con la del evento
    this.casas = [{
      id_casa: this.defaults.id_casa,
      numero_casa: this.defaults.numero_casa
    }];
  } else if(this.defaults && this.defaults.modo == "CREAR"){
    this.mode = 'create';
    this.defaults = {};
    this.numero_casa = '';
    this.isOwner = true;
    // 👉 SOLO para create → casas del localStorage
    this.casas = JSON.parse(localStorage.getItem('casas')) || [];
    console.log("casas otenidas de localstorage aqui: ", this.casas)
  }

  this.form = this.fb.group({
    nombre_evento: [this.defaults.nombre_evento || '', Validators.required],
    descripcion_evento: [this.defaults.descripcion_evento || '', Validators.required],
    fecha_inicio: [this.defaults.fecha_inicio || '', Validators.required],
    fecha_fin: [this.defaults.fecha_fin || '', Validators.required],
    id_casa: [
      this.mode === 'update'
        ? this.defaults.id_casa
        : (this.casas.length > 0 ? this.casas[0].id_casa : ''),
      Validators.required
    ]
  });

  console.log('[DEBUG] Evento recibido para edición:', this.defaults);
  console.log('[DEBUG] isOwner:', this.isOwner);
  console.log('[DEBUG] Casas cargadas:', this.casas);
}




  save() {
    if (!this.isOwner) {
      return; // seguridad adicional (no debería ocurrir)
    }

    const evento = this.form.value;

    const payload = {
      ...evento,
      username: this.username,
      nickname: this.nicknameUsuario,
      numero_casa: this.numero_casa
    };

    console.log('[DEBUG] Payload:', payload);
    this.dialogRef.close(payload);
  }

  delete() {
    console.log("se presiono eliminar")
    this.dialogRef.close({ delete: true });
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
