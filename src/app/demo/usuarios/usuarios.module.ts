import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../../../src/@fury/shared/list/list.module';
import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';
import { usuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { CustomerCreateUpdateModule } from './user-create-update/user-create-update.module';
import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';

@NgModule({
  imports: [
    CommonModule,
    usuariosRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,

    // Core
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [UsuariosComponent],
  exports: [UsuariosComponent]
})
export class UsuariosModule {
}
