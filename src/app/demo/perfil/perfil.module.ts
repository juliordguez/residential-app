import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    BreadcrumbsModule,
    FurySharedModule,
    PerfilRoutingModule,
    MatDividerModule,
  ],
  exports: [PerfilComponent]
})
export class PerfilModule { }
