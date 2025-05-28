import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasComponent } from './noticias.component';
import { NoticiasRoutingModule } from './noticias-routing.module';
import { MaterialModule } from 'src/@fury/shared/material-components.module';
import { FurySharedModule } from 'src/@fury/fury-shared.module';
import { BreadcrumbsModule } from 'src/@fury/shared/breadcrumbs/breadcrumbs.module';
import { ListModule } from 'src/@fury/shared/list/list.module';
import { NoticiaCreateUpdateModule } from './noticia-create-update/noticia-create-update.module';

@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    NoticiasRoutingModule,
    MaterialModule,
    FurySharedModule,
    BreadcrumbsModule,
    ListModule,
    NoticiaCreateUpdateModule
  ],
  exports: [NoticiasComponent]
})
export class NoticiasModule {}
