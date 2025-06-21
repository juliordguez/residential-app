// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
// import { ListModule } from '../../../../src/@fury/shared/list/list.module';
// import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';
// import { ProveedoresRoutingModule } from './proveedores-routing.module';
// import { ProveedoresComponent } from './proveedores.component';
// import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';

// @NgModule({
//   imports: [
//     CommonModule,
//     ProveedoresRoutingModule,
//     FormsModule,
//     MaterialModule,
//     FurySharedModule,

//     ListModule,
//     BreadcrumbsModule
//   ],
//   declarations: [ProveedoresComponent],
//   exports: [ProveedoresComponent]
// })
// export class ProveedoresModule { }







import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../../../src/@fury/shared/list/list.module';
import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresComponent } from './proveedores.component';
import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';
import { ProveedorCreateUpdateComponent } from './proveedor-create-update/proveedor-create-update.component';

@NgModule({
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    FormsModule,
    ReactiveFormsModule,  // necesario para usar formGroup
    MaterialModule,
    FurySharedModule,
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [
    ProveedoresComponent,
    ProveedorCreateUpdateComponent // necesario para declarar el nuevo componente
  ],
  exports: [ProveedoresComponent]
})
export class ProveedoresModule {}
