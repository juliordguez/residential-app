import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeudoresComponent } from './deudores.component';

const routes: Routes = [
  {
    path: '',
    component: DeudoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeudoresRoutingModule {}
