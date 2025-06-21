// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';


// @Component({
//   selector: 'fury-toolbar-user',
//   templateUrl: './toolbar-user.component.html',
//   styleUrls: ['./toolbar-user.component.scss']
// })
// export class ToolbarUserComponent implements OnInit {

//   isOpen: boolean;

//   constructor(private router: Router) {}

//   ngOnInit() {
//   }

//   toggleDropdown() {
//     this.isOpen = !this.isOpen;
//   }

//   onClickOutside() {
//     this.isOpen = false;
//   }

//   logout() {
//     localStorage.removeItem('token');


//       localStorage.removeItem('user_uuid');
//   localStorage.removeItem('id_fraccionamiento');
//   localStorage.removeItem('id_casa');
//   localStorage.removeItem('roles');
//   localStorage.removeItem('user_status');
//   localStorage.removeItem('username');
//   localStorage.removeItem('nick_name');
//   localStorage.removeItem('email');
//   localStorage.removeItem('numero_casa');
//   localStorage.removeItem('nombre_completo');  // ya vi que también tienes este
//   localStorage.removeItem('role_uuid');  // ya vi que también tienes este
//   localStorage.removeItem('nickname');  // ya vi que también tienes este
//   localStorage.removeItem('name_rol');  // ya vi que también tienes este
//   localStorage.removeItem('id_role');  // ya vi que también tienes este
//   localStorage.removeItem('casas');  // ya vi que también tienes este



//     document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//     document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

//     window.location.href = '/login';
//     this.router.navigate(['/login']);
//   }

// }





import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fury-toolbar-user',
  templateUrl: './toolbar-user.component.html',
  styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

  isOpen: boolean;
  nickname: string = '';  // <--- agregamos variable

  constructor(private router: Router) {}

  ngOnInit() {
    // Al inicializar el componente, cargamos el nickname del localStorage
    this.nickname = localStorage.getItem('nickname') || 'Usuario';
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user_uuid');
    localStorage.removeItem('id_fraccionamiento');
    localStorage.removeItem('id_casa');
    localStorage.removeItem('roles');
    localStorage.removeItem('user_status');
    localStorage.removeItem('username');
    localStorage.removeItem('nick_name');
    localStorage.removeItem('email');
    localStorage.removeItem('numero_casa');
    localStorage.removeItem('nombre_completo');
    localStorage.removeItem('role_uuid');
    localStorage.removeItem('nickname');
    localStorage.removeItem('name_rol');
    localStorage.removeItem('id_role');
    localStorage.removeItem('casas');

    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = '/login';
    this.router.navigate(['/login']);
  }

}
