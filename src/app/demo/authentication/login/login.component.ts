
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { fadeInUpAnimation } from '../../../../@fury/animations/fade-in-up.animation';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [fadeInUpAnimation]
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;
  fraccionamientos: any[] = []; // Para dropdown

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
    // Construir form con campo de fraccionamiento
    this.form = this.fb.group({
      identifier: ['', [Validators.required]],
      pswd: ['', [Validators.required, Validators.minLength(4)]], // en tus demos el pass es "password"
      id_fraccionamiento: ['', Validators.required] // dropdown obligatorio
    });

    // Cargar fraccionamientos al iniciar
    this.getFraccionamientos();
  }

  getFraccionamientos() {
    this.http.get<any[]>(`${environment.apiDemo}/demo/fraccionamientos`)
      .subscribe({
        next: (data) => {
          console.log('[DEBUG] Fraccionamientos:', data);
          this.fraccionamientos = data;
        },
        error: (err) => {
          console.error('[ERROR] Al obtener fraccionamientos:', err);
          this.snackbar.open('Error al obtener fraccionamientos', 'Cerrar', { duration: 3000 });
        }
      });
  }

  send() {
    if (this.form.valid) {
      const loginData = {
        identifier: this.form.value.identifier,
        pswd: this.form.value.pswd,
        id_fraccionamiento: this.form.value.id_fraccionamiento
      };

      console.log('[DEBUG] Enviando login data:', loginData);

      this.http.post<any>(`${environment.apiDemo}/demo/login`, loginData).subscribe({
        next: (response) => {
          console.log('[DEBUG] Login response:', response);

          // Guarda el token en localStorage
          localStorage.setItem('token', response.message.token);

          // Decodificar el token
          const payload = JSON.parse(atob(response.message.token.split('.')[1]));
          console.log('[DEBUG] Token payload:', payload);

          // Guardar valores relevantes en localStorage
          localStorage.setItem('user_uuid', payload.user_uuid);
          localStorage.setItem('id_fraccionamiento', payload.id_fraccionamiento);
          localStorage.setItem('role_uuid', payload.role_uuid);
          localStorage.setItem('user_status', payload.user_status.toString());

          // Llamada al endpoint de perfil de usuario
          this.http.get<any>(`${environment.apiDemo}/demo/usuarios/perfil/${payload.user_uuid}`).subscribe({
            next: (userData) => {
              console.log('[DEBUG] Datos de perfil de usuario:', userData);

              // Guardar datos adicionales
              localStorage.setItem('username', userData.username);
              localStorage.setItem('nickname', userData.nickname || '');
              localStorage.setItem('email', userData.email);
              localStorage.setItem('name_rol', userData.name_rol);
              localStorage.setItem('id_role', userData.id_role);
              localStorage.setItem('role_uuid', userData.role_uuid);
              localStorage.setItem('name_rol', userData.nombre_rol);


              // Guardar **casas** como JSON string (lista)
              localStorage.setItem('casas', JSON.stringify(userData.casas));

              // Marcar autenticado y navegar
              this.authService.setAuthenticated(true);
              this.router.navigate(['/zona-comun']);
            },
            error: (err) => {
              console.error('[ERROR] Al obtener perfil de usuario:', err);
              this.snackbar.open('Error al obtener datos del usuario', 'Cerrar', { duration: 3000 });
            }
          });
        },
        error: (error) => {
          console.error('Error en login:', error);
          this.snackbar.open('Credenciales inválidas o error en login', 'Cerrar', { duration: 3000 });
        }
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
