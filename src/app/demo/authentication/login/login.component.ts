// import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
// import { UntypedFormBuilder, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { Router } from '@angular/router';
// import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
// import { HttpClient } from '@angular/common/http';
// import { AuthService } from '../../../services/auth.service';
// import { LoginRequest } from 'src/app/models/request/auth.model';

// @Component({
//   selector: 'fury-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
//   animations: [fadeInUpAnimation]
// })
// export class LoginComponent implements OnInit {

//   form: UntypedFormGroup;

//   inputType = 'password';
//   visible = false;

//   constructor(private router: Router,
//               private fb: FormBuilder,
//               private cd: ChangeDetectorRef,
//               private snackbar: MatSnackBar,
//               private http: HttpClient,
//               private authService: AuthService,
//   ) {
//   }

//   ngOnInit() {
//     this.form = this.fb.group({
//       identifier: ['', [Validators.required]],
//       pswd: ['', [Validators.required, Validators.minLength(8)]]
//     });
//   }

//   send() {
//     if (this.form.valid) {
//       // Extraer valores del formulario
//       const loginData: LoginRequest = {
//         identifier: this.form.value.identifier,
//         pswd: this.form.value.pswd
//       };

//       // Enviar al servicio de autenticación
//       this.authService.login(loginData).subscribe({
//         next: (response) => {
//           // Guarda el token en localStorage
//           localStorage.setItem('token', response.message.token);
//           // Redirige o hace algo después del login
//           this.authService.setAuthenticated(true);

//           this.router.navigate(['/dashboard']);
//         },
//         error: (error) => console.error('Error en login:', error)
//       });
//     }
//   }

//   toggleVisibility() {
//     if (this.visible) {
//       this.inputType = 'password';
//       this.visible = false;
//       this.cd.markForCheck();
//     } else {
//       this.inputType = 'text';
//       this.visible = true;
//       this.cd.markForCheck();
//     }
//   }
// }











import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { LoginRequest } from 'src/app/models/request/auth.model';

@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInUpAnimation]
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              private http: HttpClient,
              private authService: AuthService,
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      identifier: ['', [Validators.required]],
      pswd: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  send() {
    if (this.form.valid) {
      const loginData: LoginRequest = {
        identifier: this.form.value.identifier,
        pswd: this.form.value.pswd
      };

      this.authService.login(loginData).subscribe({
        next: (response) => {
          // Guarda el token
          console.log("document.cookie");
          console.log(document.cookie);
          console.log("response");
          console.log(response);
          console.log("response.message");
          console.log(response.message);

          if(!response.message.token){
            this.router.navigate(['/login']);
            return;
          }
          localStorage.setItem('token', response.message.token);
          // Decodificar el token y guardar campos en localStorage
          this.decodeAndStoreTokenData(response.message.token);
          // Marcar autenticado
          this.authService.setAuthenticated(true);
          // Redirigir
          this.router.navigate(['/dashboard']);
        },
        error: (error) => console.error('Error en login:', error)
      });
    }
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  // 🔥 Función utilitaria para decodificar y guardar payload del token
  private decodeAndStoreTokenData(token: string): void {
    try {
      const payloadBase64 = token.split('.')[1];
      const payloadJson = atob(payloadBase64);
      const payload = JSON.parse(payloadJson);

      console.log('[DEBUG] Payload decodificado:', payload);

      // Guarda los campos que necesites
      localStorage.setItem('user_uuid', payload.user_uuid);
      localStorage.setItem('id_fraccionamiento', payload.id_fraccionamiento?.toString());
      localStorage.setItem('id_casa', payload.id_casa?.toString());
      localStorage.setItem('roles', JSON.stringify(payload.roles));
      localStorage.setItem('user_status', payload.user_status?.toString() || '');
      localStorage.setItem('nick_name', payload.nick_name || '');

    } catch (error) {
      console.error('[ERROR] Al decodificar el token:', error);
    }
  }
}
