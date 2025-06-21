// import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
// import { map } from 'rxjs/operators';
// import { ThemeService } from '../../../@fury/services/theme.service';

// @Component({
//   selector: 'fury-toolbar',
//   templateUrl: './toolbar.component.html',
//   styleUrls: ['./toolbar.component.scss']
// })
// export class ToolbarComponent implements OnInit {

//   @Input()
//   @HostBinding('class.no-box-shadow')
//   hasNavigation: boolean;

//   @Output() openSidenav = new EventEmitter();
//   @Output() openQuickPanel = new EventEmitter();

//   topNavigation$ = this.themeService.config$.pipe(map(config => config.navigation === 'top'));

//   constructor(private themeService: ThemeService) {
//   }

//   ngOnInit() { }


// }










import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { ThemeService } from '../../../@fury/services/theme.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'fury-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  @HostBinding('class.no-box-shadow')
  hasNavigation: boolean;

  @Output() openSidenav = new EventEmitter();
  @Output() openQuickPanel = new EventEmitter();

  topNavigation$ = this.themeService.config$.pipe(map(config => config.navigation === 'top'));

  fraccionamientoNombre: string = '';  // <--- añadimos esta variable

  constructor(private themeService: ThemeService,
              private http: HttpClient) {
  }

  ngOnInit() {
    const idFraccionamiento = localStorage.getItem('id_fraccionamiento');

    if (idFraccionamiento) {
      // Ajusta la URL según tu endpoint real:
      this.http.get<any>(`${environment.apiDemo}/demo/fraccionamientos/${idFraccionamiento}`)
        .subscribe(
          (response) => {
            // Ajusta según como venga el campo del nombre:
            this.fraccionamientoNombre = response.nombre || 'Nombre no disponible';
          },
          (error) => {
            console.error('Error al obtener fraccionamiento', error);
            this.fraccionamientoNombre = 'Error al cargar nombre';
          }
        );
    } else {
      this.fraccionamientoNombre = 'No definido';
    }
  }

}
