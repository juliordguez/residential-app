import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VecinosComponent } from './vecinos.component';

const routes: Routes = [
  {
    path: '',
    component: VecinosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VecinosRoutingModule {}
