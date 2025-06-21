// import { DOCUMENT } from '@angular/common';
// import { Component, Inject, Renderer2, ChangeDetectorRef } from '@angular/core';
// import { MatIconRegistry } from '@angular/material/icon';
// import { SidenavService } from './layout/sidenav/sidenav.service';
// import { ThemeService } from '../@fury/services/theme.service';
// import { ActivatedRoute, Router } from '@angular/router';
// import { filter } from 'rxjs/operators';
// import { Platform } from '@angular/cdk/platform';
// import { SplashScreenService } from '../@fury/services/splash-screen.service';
// import { AuthService } from './services/auth.service';
// import { LoaderService } from './shared/loader/loader.service';
// import { Observable } from 'rxjs';



// @Component({
//   selector: 'fury-root',
//   templateUrl: './app.component.html'
// })
// export class AppComponent {

//   isLoading$: Observable<boolean>;


//   isAuthenticated = false;

//   constructor(private authService: AuthService,
//               private sidenavService: SidenavService,
//               private iconRegistry: MatIconRegistry,
//               private renderer: Renderer2,
//               private themeService: ThemeService,
//               @Inject(DOCUMENT) private document: Document,
//               private platform: Platform,
//               private route: ActivatedRoute,
//               private splashScreenService: SplashScreenService,
//               private router: Router,
//               private loaderService: LoaderService,
//               private cdr: ChangeDetectorRef

//             ) {
//     this.isLoading$ = this.loaderService.loading$;

//     this.route.queryParamMap.pipe(
//       filter(queryParamMap => queryParamMap.has('style'))
//     ).subscribe(queryParamMap => this.themeService.setStyle(queryParamMap.get('style')));

//     this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
//     this.themeService.theme$.subscribe(theme => {
//       if (theme[0]) {
//         this.renderer.removeClass(this.document.body, theme[0]);
//       }

//       this.renderer.addClass(this.document.body, theme[1]);
//     });

//     if (this.platform.BLINK) {
//       this.renderer.addClass(this.document.body, 'is-blink');
//     }

//     this.sidenavService.addItems([
//       // {
//       //   name: 'APPS',
//       //   position: 5,
//       //   type: 'subheading',
//       //   customClass: 'first-subheading'
//       // },
//       {
//         name: 'Dashboard',
//         routeOrFunction: '/',
//         icon: 'dashboard',
//         position: 5,
//         pathMatchExact: true
//       },
//       {
//         name: 'Administracion',
//         icon: 'admin_panel_settings',
//         position: 10,
//         subItems: [
//         {
//           name: 'Usuarios',
//           routeOrFunction: '/usuarios',
//           icon: 'people',
//           badge: '22',
//           badgeColor: '#2196F3',
//           position: 5,
//         },
//         {
//           name: 'Roles',
//           routeOrFunction: '/roles',
//           icon: 'security',
//           position: 10
//         },
//         ]
//       },
//       {
//         name: 'Finanzas',
//         icon: 'attach_money',
//         position: 15,
//         subItems: [
//           {
//             name: 'Morosos',
//             routeOrFunction: '/apps/morosos',
//             icon: 'report_problem',
//             position: 5
//           },
//           {
//             name: 'Tesoreria',
//             routeOrFunction: '/apps/tesoreria',
//             icon: 'campaign',
//             position: 10
//           },
//           {
//             name: 'Deudores',
//             routeOrFunction: '/deudores',
//             icon: 'account_balance_wallet',
//             position: 65
//           },
//         ]
//       },
//       {
//         name: 'Comunidad',
//         icon: 'people',
//         position: 20,
//         subItems: [
//           {
//             name: 'Noticias',
//             routeOrFunction: '/noticias',
//             icon: 'inbox',
//             position: 5
//           },
//           {
//             name: 'Zona comun',
//             routeOrFunction: '/zona-comun',
//             icon: 'meeting_room',
//             position: 10,
//           },
//           {
//             name: 'Reglamento',
//             routeOrFunction: '/apps/reglamento',
//             icon: 'gavel',
//             position: 15
//           },
//         ]
//       },
//       {
//         name: 'Residencias',
//         icon: 'home_work',
//         position: 25,
//         subItems: [
//           {
//             name: 'Mascotas',
//             routeOrFunction: '/mascotas',
//             icon: 'pets',
//             position: 5
//           },
//           {
//             name: 'Casas',
//             routeOrFunction: '/casas',
//             icon: 'home',
//             position: 10
//           },
//         ]
//       },
//       {
//         name: 'Servicios',
//         icon: 'store',
//         position: 30,
//         subItems: [
//           {
//             name: 'Proveedores',
//             routeOrFunction: '/proveedores',
//             icon: 'local_shipping',
//             position: 5
//           },
//           {
//             name: 'Mercado',
//             routeOrFunction: '/mercado',
//             icon: 'shopping_bag',
//             position: 10
//           },
//         ]
//       },
//       // {
//       //   name: 'Cerrar sesión',
//       //   routeOrFunction: () => this.logout(), // o simplemente logout si está global
//       //   icon: 'logout',
//       //   position: 999 // posición al final
//       // },
//       // {
//       //   name: 'Chat',
//       //   routeOrFunction: '/apps/chat',
//       //   icon: 'chat',
//       //   position: 30,
//       //   badge: '14',
//       //   badgeColor: '#009688'
//       // },
//       // {
//       //   name: 'USER INTERFACE',
//       //   type: 'subheading',
//       //   position: 35
//       // },
//       // {
//       //   name: 'Components',
//       //   routeOrFunction: '/components',
//       //   icon: 'layers',
//       //   position: 40
//       // },
//       // {
//       //   name: 'Forms',
//       //   icon: 'description',
//       //   position: 45,
//       //   subItems: [
//       //     {
//       //       name: 'Form Elements',
//       //       routeOrFunction: '/forms/form-elements',
//       //       position: 10
//       //     },
//       //     {
//       //       name: 'Form Wizard',
//       //       routeOrFunction: '/forms/form-wizard',
//       //       position: 15
//       //     }
//       //   ]
//       // },
//       // {
//       //   name: 'Drag & Drop',
//       //   routeOrFunction: '/drag-and-drop',
//       //   icon: 'mouse',
//       //   position: 55
//       // },
//       // {
//       //   name: 'WYSIWYG Editor',
//       //   routeOrFunction: '/editor',
//       //   icon: 'format_shapes',
//       //   position: 60
//       // },
//       // {
//       //   name: 'PAGES',
//       //   type: 'subheading',
//       //   position: 65
//       // },
//       // {
//       //   name: 'Authentication',
//       //   icon: 'lock',
//       //   position: 66,
//       //   subItems: [
//       //     {
//       //       name: 'Login Page',
//       //       routeOrFunction: '/login',
//       //       position: 5
//       //     },
//       //     {
//       //       name: 'Register Page',
//       //       routeOrFunction: '/register',
//       //       position: 10
//       //     },
//       //     {
//       //       name: 'Forgot Password',
//       //       routeOrFunction: '/forgot-password',
//       //       position: 15
//       //     }
//       //   ]
//       // },
//       // {
//       //   name: 'Page Layouts',
//       //   icon: 'view_compact',
//       //   position: 67,
//       //   subItems: [
//       //     {
//       //       name: 'Simple',
//       //       routeOrFunction: '/page-layouts/simple',
//       //       position: 5
//       //     },
//       //     {
//       //       name: 'Simple Tabbed',
//       //       routeOrFunction: '/page-layouts/simple-tabbed',
//       //       position: 5
//       //     },
//       //     {
//       //       name: 'Card',
//       //       routeOrFunction: '/page-layouts/card',
//       //       position: 10
//       //     },
//       //     {
//       //       name: 'Card Tabbed',
//       //       routeOrFunction: '/page-layouts/card-tabbed',
//       //       position: 15
//       //     },
//       //   ],
//       //   badge: '4',
//       //   badgeColor: '#4CAF50'
//       // },
//       // {
//       //   name: 'Coming Soon',
//       //   routeOrFunction: '/coming-soon',
//       //   icon: 'watch_later',
//       //   position: 68
//       // },
//       // {
//       //   name: 'Blank',
//       //   routeOrFunction: '/blank',
//       //   icon: 'picture_in_picture',
//       //   position: 69
//       // },
//       // {
//       //   name: 'Material Icons',
//       //   routeOrFunction: '/icons',
//       //   icon: 'grade',
//       //   position: 75
//       // },
//       // {
//       //   name: 'Multi-Level Menu',
//       //   icon: 'menu',
//       //   position: 85,
//       //   subItems: [
//       //     {
//       //       name: 'Level 1',
//       //       subItems: [
//       //         {
//       //           name: 'Level 2',
//       //           subItems: [
//       //             {
//       //               name: 'Level 3',
//       //               subItems: [
//       //                 {
//       //                   name: 'Level 4',
//       //                   subItems: [
//       //                     {
//       //                       name: 'Level 5',
//       //                       routeOrFunction: '/level1/level2/level3/level4/level5'
//       //                     }
//       //                   ]
//       //                 }
//       //               ]
//       //             }
//       //           ]
//       //         }
//       //       ]
//       //     }
//       //   ]
//       // }
//     ]);
//   }

//   ngOnInit(): void {
//     this.isAuthenticated = this.authService.isAuthenticated();

//     this.authService.authenticated$.subscribe(auth => {
//       this.isAuthenticated = auth;

//       // Si ya está autenticado y está en /login, redirige
//       console.log(`this.isAuthenticated::: ${this.isAuthenticated}`)
//       if (auth && this.router.url === '/login') {
//         this.router.navigate(['/']); // o la ruta que quieras como /dashboard
//       }
//     });
//   }


//   ngAfterViewInit() {
//     this.cdr.detectChanges(); // ✅ corrige el error NG0100
//   }

//     logout() {
//     localStorage.removeItem('token');

//   localStorage.removeItem('user_uuid');
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
















import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, ChangeDetectorRef } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { SidenavService } from './layout/sidenav/sidenav.service';
import { ThemeService } from '../@fury/services/theme.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Platform } from '@angular/cdk/platform';
import { SplashScreenService } from '../@fury/services/splash-screen.service';
import { AuthService } from './services/auth.service';
import { LoaderService } from './shared/loader/loader.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'fury-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  isLoading$: Observable<boolean>;


  isAuthenticated = false;

  constructor(private authService: AuthService,
              private sidenavService: SidenavService,
              private iconRegistry: MatIconRegistry,
              private renderer: Renderer2,
              private themeService: ThemeService,
              @Inject(DOCUMENT) private document: Document,
              private platform: Platform,
              private route: ActivatedRoute,
              private splashScreenService: SplashScreenService,
              private router: Router,
              private loaderService: LoaderService,
              private cdr: ChangeDetectorRef

            ) {
    this.isLoading$ = this.loaderService.loading$;

    this.route.queryParamMap.pipe(
      filter(queryParamMap => queryParamMap.has('style'))
    ).subscribe(queryParamMap => this.themeService.setStyle(queryParamMap.get('style')));

    this.iconRegistry.setDefaultFontSetClass('material-icons-outlined');
    this.themeService.theme$.subscribe(theme => {
      if (theme[0]) {
        this.renderer.removeClass(this.document.body, theme[0]);
      }

      this.renderer.addClass(this.document.body, theme[1]);
    });

    if (this.platform.BLINK) {
      this.renderer.addClass(this.document.body, 'is-blink');
    }

    this.sidenavService.addItems([
      // {
      //   name: 'APPS',
      //   position: 5,
      //   type: 'subheading',
      //   customClass: 'first-subheading'
      // },
      {
        name: 'Administracion',
        icon: 'admin_panel_settings',
        position: 10,
        subItems: [
        {
          name: 'Usuarios',
          routeOrFunction: '/usuarios',
          icon: 'people',
          // badge: '22',
          badgeColor: '#2196F3',
          position: 5,
        },
        {
            name: 'Casas',
            routeOrFunction: '/casas',
            icon: 'home',
            position: 10
          },
        {
            name: 'Vehiculos',
            routeOrFunction: '/vehiculos',
            icon: 'vehiculos',
            position: 15
          },
        ]
      },
      {
        name: 'Finanzas',
        icon: 'attach_money',
        position: 55,
        subItems: [
          // {
          //   name: 'Morosos',
          //   routeOrFunction: '/apps/morosos',
          //   icon: 'report_problem',
          //   position: 5
          // },
          {
            name: 'Tesoreria',
            routeOrFunction: '/apps/tesoreria',
            icon: 'campaign',
            position: 10
          },
          {
            name: 'Deudores',
            routeOrFunction: '/deudores',
            icon: 'account_balance_wallet',
            position: 65
          },
        ]
      },
      {
        name: 'Comunidad',
        icon: 'people',
        position: 20,
        subItems: [
          {
            name: 'Zona comun',
            routeOrFunction: '/zona-comun',
            icon: 'meeting_room',
            position: 5,
          },
          {
            name: 'Vecinos',
            routeOrFunction: '/vecinos',
            icon: 'people',
            position: 15
          },
          {
            name: 'Mascotas',
            routeOrFunction: '/mascotas',
            icon: 'pets',
            position: 25
          },

        ]
      },

      {
        name: 'Servicios',
        icon: 'store',
        position: 25,
        subItems: [
          {
            name: 'Proveedores',
            routeOrFunction: '/proveedores',
            icon: 'local_shipping',
            position: 5
          },
        ]
      },


      {
        name: 'Reglamento',
        icon: 'home_work',
        position: 30,
        subItems: [
          {
            name: 'Reglamento',
            routeOrFunction: '/reglamento',
            icon: 'gavel',
            position: 15
          },

        ]
      },
      // {
      //   name: 'Cerrar sesión',
      //   routeOrFunction: () => this.logout(), // o simplemente logout si está global
      //   icon: 'logout',
      //   position: 999 // posición al final
      // },
      // {
      //   name: 'Chat',
      //   routeOrFunction: '/apps/chat',
      //   icon: 'chat',
      //   position: 30,
      //   badge: '14',
      //   badgeColor: '#009688'
      // },
      // {
      //   name: 'USER INTERFACE',
      //   type: 'subheading',
      //   position: 35
      // },
      // {
      //   name: 'Components',
      //   routeOrFunction: '/components',
      //   icon: 'layers',
      //   position: 40
      // },
      // {
      //   name: 'Forms',
      //   icon: 'description',
      //   position: 45,
      //   subItems: [
      //     {
      //       name: 'Form Elements',
      //       routeOrFunction: '/forms/form-elements',
      //       position: 10
      //     },
      //     {
      //       name: 'Form Wizard',
      //       routeOrFunction: '/forms/form-wizard',
      //       position: 15
      //     }
      //   ]
      // },
      // {
      //   name: 'Drag & Drop',
      //   routeOrFunction: '/drag-and-drop',
      //   icon: 'mouse',
      //   position: 55
      // },
      // {
      //   name: 'WYSIWYG Editor',
      //   routeOrFunction: '/editor',
      //   icon: 'format_shapes',
      //   position: 60
      // },
      // {
      //   name: 'PAGES',
      //   type: 'subheading',
      //   position: 65
      // },
      // {
      //   name: 'Authentication',
      //   icon: 'lock',
      //   position: 66,
      //   subItems: [
      //     {
      //       name: 'Login Page',
      //       routeOrFunction: '/login',
      //       position: 5
      //     },
      //     {
      //       name: 'Register Page',
      //       routeOrFunction: '/register',
      //       position: 10
      //     },
      //     {
      //       name: 'Forgot Password',
      //       routeOrFunction: '/forgot-password',
      //       position: 15
      //     }
      //   ]
      // },
      // {
      //   name: 'Page Layouts',
      //   icon: 'view_compact',
      //   position: 67,
      //   subItems: [
      //     {
      //       name: 'Simple',
      //       routeOrFunction: '/page-layouts/simple',
      //       position: 5
      //     },
      //     {
      //       name: 'Simple Tabbed',
      //       routeOrFunction: '/page-layouts/simple-tabbed',
      //       position: 5
      //     },
      //     {
      //       name: 'Card',
      //       routeOrFunction: '/page-layouts/card',
      //       position: 10
      //     },
      //     {
      //       name: 'Card Tabbed',
      //       routeOrFunction: '/page-layouts/card-tabbed',
      //       position: 15
      //     },
      //   ],
      //   badge: '4',
      //   badgeColor: '#4CAF50'
      // },
      // {
      //   name: 'Coming Soon',
      //   routeOrFunction: '/coming-soon',
      //   icon: 'watch_later',
      //   position: 68
      // },
      // {
      //   name: 'Blank',
      //   routeOrFunction: '/blank',
      //   icon: 'picture_in_picture',
      //   position: 69
      // },
      // {
      //   name: 'Material Icons',
      //   routeOrFunction: '/icons',
      //   icon: 'grade',
      //   position: 75
      // },
      // {
      //   name: 'Multi-Level Menu',
      //   icon: 'menu',
      //   position: 85,
      //   subItems: [
      //     {
      //       name: 'Level 1',
      //       subItems: [
      //         {
      //           name: 'Level 2',
      //           subItems: [
      //             {
      //               name: 'Level 3',
      //               subItems: [
      //                 {
      //                   name: 'Level 4',
      //                   subItems: [
      //                     {
      //                       name: 'Level 5',
      //                       routeOrFunction: '/level1/level2/level3/level4/level5'
      //                     }
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ]
      //     }
      //   ]
      // }
    ]);
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();

    this.authService.authenticated$.subscribe(auth => {
      this.isAuthenticated = auth;

      // Si ya está autenticado y está en /login, redirige
      console.log(`this.isAuthenticated::: ${this.isAuthenticated}`)
      if (auth && this.router.url === '/login') {
        this.router.navigate(['/']); // o la ruta que quieras como /dashboard
      }
    });
  }


  ngAfterViewInit() {
    this.cdr.detectChanges(); // ✅ corrige el error NG0100
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
  localStorage.removeItem('nombre_completo');  // ya vi que también tienes este
  localStorage.removeItem('role_uuid');  // ya vi que también tienes este
  localStorage.removeItem('nickname');  // ya vi que también tienes este
  localStorage.removeItem('name_rol');  // ya vi que también tienes este
  localStorage.removeItem('id_role');  // ya vi que también tienes este
  localStorage.removeItem('casas');  // ya vi que también tienes este


    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    window.location.href = '/login';
    this.router.navigate(['/login']);
  }
}
