import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from '../../../../src/@fury/shared/list/list.module';
import { MaterialModule } from '../../../../src/@fury/shared/material-components.module';
import { casasRoutingModule } from './casas-routing.module';
import { CasasComponent } from './casas.component';
import { CasaCreateUpdateModule } from './casa-create-update/casa-create-update.module';
import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';

@NgModule({
  imports: [
    CommonModule,
    casasRoutingModule,
    FormsModule,
    MaterialModule,
    FurySharedModule,
    ListModule,
    BreadcrumbsModule
  ],
  declarations: [CasasComponent],
  exports: [CasasComponent]
})
export class CasasModule {}
