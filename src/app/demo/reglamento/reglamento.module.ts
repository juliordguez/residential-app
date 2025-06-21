// import { CommonModule } from '@angular/common';
// import { ReglamentoRoutingModule } from './reglamento-routing.module';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { HttpClientModule } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { MatCardModule } from '@angular/material/card';
// import { MatInputModule } from '@angular/material/input';
// import { ReglamentoComponent } from './reglamento.component';

// @NgModule({
//   declarations: [ReglamentoComponent],
//   imports: [
//     CommonModule,
//     MatButtonModule,
//     MatIconModule,
//     MatCardModule,
//     MatInputModule,
//     HttpClientModule,
//     ReglamentoRoutingModule   // 👉 aquí
//   ]
// })
// export class ReglamentoModule {}




import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FurySharedModule } from '../../../../src/@fury/fury-shared.module';
import { ReglamentoRoutingModule } from './reglamento-routing.module';
import { ReglamentoComponent } from './reglamento.component';

@NgModule({
  declarations: [ReglamentoComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    ReglamentoRoutingModule,
    FurySharedModule   // 👈 esto
  ]
})
export class ReglamentoModule {}
