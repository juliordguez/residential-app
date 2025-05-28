import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';
import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';
import { ListModule } from '../../../../src/@fury/shared/list/list.module';
import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { RoleCreateUpdateModule } from './role-create-update/role-create-update.module';

@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    ListModule,
    BreadcrumbsModule,
    RoleCreateUpdateModule
  ]
})
export class RolesModule {}
