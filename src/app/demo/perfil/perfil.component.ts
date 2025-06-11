import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent {
  perfilForm: FormGroup;

  usuario = {
    nombre: 'Julio César Rodríguez',
    casa: 'Casa 23, Manzana B',
    email: 'julio@example.com',
    imagen: 'assets/images/avatar.jpg'
  };

  ngOnInit(){
    console.log("CComponente perfil")
  }

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      correo: [this.usuario.email, [Validators.required, Validators.email]],
      nuevaPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  restablecerPassword() {
    if (this.perfilForm.valid) {
      const { correo, nuevaPassword } = this.perfilForm.value;
      console.log('Enviar solicitud de restablecimiento para:', correo, nuevaPassword);
      // Aquí llamarías al servicio para enviar el correo
    }
  }

  editarAvatar() {
}

}
