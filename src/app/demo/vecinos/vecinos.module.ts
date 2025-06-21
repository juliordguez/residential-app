import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VecinosComponent } from './vecinos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { VecinosRoutingModule } from './vecinos-routing.module';

@NgModule({
  declarations: [
    VecinosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FurySharedModule,
    VecinosRoutingModule,
    BreadcrumbsModule,
    ListModule
  ],
  exports: [VecinosComponent]
})
export class VecinosModule {}
