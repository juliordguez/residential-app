import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';

import { ProveedoresComponent } from './proveedores.component';
import { ProveedorCreateUpdateModule } from './proveedor-create-update/proveedor-create-update.module';
import { ProveedoresRoutingModule } from './proveedores-routing.module';

@NgModule({
  declarations: [ProveedoresComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    BreadcrumbsModule,
    ListModule,
    ProveedorCreateUpdateModule,
    ProveedoresRoutingModule
  ],
  exports: [ProveedoresComponent]
})
export class ProveedoresModule {}
