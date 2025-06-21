// import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { SidenavItem } from './sidenav-item/sidenav-item.interface';
// import { SidenavService } from './sidenav.service';
// import { ThemeService } from '../../../@fury/services/theme.service';

// @Component({
//   selector: 'fury-sidenav',
//   templateUrl: './sidenav.component.html',
//   styleUrls: ['./sidenav.component.scss']
// })
// export class SidenavComponent implements OnInit, OnDestroy {

//   sidenavUserVisible$ = this.themeService.config$.pipe(map(config => config.sidenavUserVisible));

//   @Input()
//   @HostBinding('class.collapsed')
//   collapsed: boolean;

//   @Input()
//   @HostBinding('class.expanded')
//   expanded: boolean;

//   items$: Observable<SidenavItem[]>;

//   constructor(private router: Router,
//               private sidenavService: SidenavService,
//               private themeService: ThemeService) {
//   }

//   ngOnInit() {
//     this.items$ = this.sidenavService.items$.pipe(
//       map((items: SidenavItem[]) => this.sidenavService.sortRecursive(items, 'position'))
//     );
//   }

//   toggleCollapsed() {
//     this.sidenavService.toggleCollapsed();
//   }

//   @HostListener('mouseenter')
//   @HostListener('touchenter')
//   onMouseEnter() {
//     this.sidenavService.setExpanded(true);
//   }

//   @HostListener('mouseleave')
//   @HostListener('touchleave')
//   onMouseLeave() {
//     this.sidenavService.setExpanded(false);
//   }

//   ngOnDestroy() {
//   }

//   logout() {
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






import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavItem } from './sidenav-item/sidenav-item.interface';
import { SidenavService } from './sidenav.service';
import { ThemeService } from '../../../@fury/services/theme.service';

@Component({
  selector: 'fury-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  sidenavUserVisible$ = this.themeService.config$.pipe(map(config => config.sidenavUserVisible));

  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;

  @Input()
  @HostBinding('class.expanded')
  expanded: boolean;

  items$: Observable<SidenavItem[]>;

  nickname: string = ''; // <--- agregas esta variable

  constructor(private router: Router,
              private sidenavService: SidenavService,
              private themeService: ThemeService) {
  }

  ngOnInit() {
    this.items$ = this.sidenavService.items$.pipe(
      map((items: SidenavItem[]) => this.sidenavService.sortRecursive(items, 'position'))
    );

    // Leer nickname del localStorage
    this.nickname = localStorage.getItem('nickname') || 'Usuario';
  }

  toggleCollapsed() {
    this.sidenavService.toggleCollapsed();
  }

  @HostListener('mouseenter')
  @HostListener('touchenter')
  onMouseEnter() {
    this.sidenavService.setExpanded(true);
  }

  @HostListener('mouseleave')
  @HostListener('touchleave')
  onMouseLeave() {
    this.sidenavService.setExpanded(false);
  }

  ngOnDestroy() {
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
