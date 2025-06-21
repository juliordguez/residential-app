import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasComponent } from './mascotas.component';
import { MascotaCreateUpdateComponent } from './mascota-create-update/mascota-create-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { MascotasRoutingModule } from './mascotas-routing.module'; // ✅ Agregado igual que proveedores
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from 'src/@fury/shared/list/list.module';

@NgModule({
  declarations: [
    MascotasComponent,
    MascotaCreateUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FurySharedModule,
    MascotasRoutingModule,        // ✅ Igual que Proveedores
    BreadcrumbsModule,           // ✅ Para fury-breadcrumbs
    ListModule                   // ✅ Para fury-list
  ],
  exports: [MascotasComponent]
})
export class MascotasModule {}
