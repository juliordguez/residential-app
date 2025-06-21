
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZonaComunComponent } from './zona-comun.component';

const routes: Routes = [
  {
    path: '',
    component: ZonaComunComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ZonaComunRoutingModule { }
