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
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      identifier: ['', [Validators.required]],
      pswd: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  send() {
    if (this.form.valid) {
      // Extraer valores del formulario
      const loginData: LoginRequest = {
        identifier: this.form.value.identifier,
        pswd: this.form.value.pswd
      };

      // Enviar al servicio de autenticación
      this.authService.login(loginData).subscribe({
        next: (response) => {
          // Guarda el token en localStorage
          localStorage.setItem('token', response.message.token);
          // Redirige o hace algo después del login
          this.authService.setAuthenticated(true);

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
}
