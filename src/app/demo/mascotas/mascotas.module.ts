import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotasComponent } from './mascotas.component';
import { MascotasRoutingModule } from './mascotas-routing.module';
import { MascotaCreateUpdateModule } from './mascota-create-update/mascota-create-update.module';
import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';
import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';
import { FormsModule } from '@angular/forms';
import { ListModule } from '../../../../src/@fury/shared/list/list.module';


@NgModule({
  declarations: [MascotasComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListModule,
    MascotasRoutingModule,
    MascotaCreateUpdateModule,
    MaterialModule,
    BreadcrumbsModule,
    FurySharedModule
  ],
  exports: [MascotasComponent]
})
export class MascotasModule {}

