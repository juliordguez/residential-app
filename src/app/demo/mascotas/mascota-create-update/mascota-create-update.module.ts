import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascotaCreateUpdateComponent } from './mascota-create-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/@fury/shared/material-components.module';

@NgModule({
  declarations: [MascotaCreateUpdateComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [MascotaCreateUpdateComponent]
})
export class MascotaCreateUpdateModule {}