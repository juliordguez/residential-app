import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
// import { RoleCreateUpdateModule } from './role-create-update/role-create-update.module';
import { RolesRoutingModule } from './roles-routing.module';

import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';
import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../../../src/@fury/shared/list/list.module';
import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';

@NgModule({
  declarations: [RolesComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    RolesRoutingModule,
    FurySharedModule,
    
    // Core
    ListModule,
    BreadcrumbsModule
    // RoleCreateUpdateModule
  ]
})
export class RolesModule { }
