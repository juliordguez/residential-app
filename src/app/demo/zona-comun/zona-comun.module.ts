
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';
// import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';
// import { ListModule } from '../../../../src/@fury/shared/list/list.module';
// import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
// import { ZonaComunRoutingModule } from './zona-comun-routing.module';
// import { ZonaComunComponent } from './zona-comun.component';
// import { FullCalendarModule } from '@fullcalendar/angular';



// // 👉 Importar estos módulos de Material que usa el Dialog:
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon'; // Si usas <mat-icon>
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';  // Necesario para el Datepicker



// @NgModule({
//   imports: [
//     CommonModule,
//     ZonaComunRoutingModule,
//     FormsModule,
//     MaterialModule,
//     FurySharedModule,
//     ListModule,
//     BreadcrumbsModule,
//     FullCalendarModule,   // ← FALTA ESTA LÍNEA

//     ReactiveFormsModule,   // Necesario para ReactiveFormsModule
//     MatDialogModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule
//   ],
//   declarations: [
//     ZonaComunComponent,
//     ZonaComunCreateUpdateComponent  // 👈 Importante: que también esté declarado

//   ],
//   exports: [ZonaComunComponent]
// })
// export class ZonaComunModule { }





import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

// Fury
import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';
import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';
import { ListModule } from '../../../../src/@fury/shared/list/list.module';
import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';

// FullCalendar
import { FullCalendarModule } from '@fullcalendar/angular';

// Componentes
import { ZonaComunRoutingModule } from './zona-comun-routing.module';
import { ZonaComunComponent } from './zona-comun.component';
import { ZonaComunCreateUpdateComponent } from './zona-comun-create-update/zona-comun-create-update.component';

@NgModule({
  imports: [
    CommonModule,
    ZonaComunRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // Fury
    MaterialModule,
    FurySharedModule,
    ListModule,
    BreadcrumbsModule,

    // Material necesario para el modal
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,

    // FullCalendar
    FullCalendarModule
  ],
  declarations: [
    ZonaComunComponent,
    ZonaComunCreateUpdateComponent  // importante que lo declares aquí
  ],
  exports: [ZonaComunComponent]
})
export class ZonaComunModule {}
