import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeudoresComponent } from './deudores.component'
import { DeudoresRoutingModule } from './deudores-routing.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { DeudorCreateUpdateModule } from './deudor-create-update/deudor-create-update.module';

@NgModule({
  declarations: [DeudoresComponent],
  imports: [
    CommonModule,
    DeudoresRoutingModule,
    MaterialModule,
    FurySharedModule,
    BreadcrumbsModule,
    ListModule,
    DeudorCreateUpdateModule
  ],
  exports: [DeudoresComponent]
})
export class DeudoresModule {}
