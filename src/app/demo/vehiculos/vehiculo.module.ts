import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../../../src/@fury/shared/list/list.module';
import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';
import { vehiculosRoutingModule } from './vehiculo-routing.module';
import { VehiculoComponent } from './vehiculo.component';
import { VehiculoCreateUpdateModule } from './vehiculo-create-update/vehiculo-create-update.module';
import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';

@NgModule({
  imports: [
    CommonModule,
    vehiculosRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,

    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [VehiculoComponent],
  exports: [VehiculoComponent]
})
export class VehiculoModule {
}
