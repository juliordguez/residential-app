import { Component, Inject, ViewEncapsulation } from "@angular/core";
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';



@Component({
  selector: 'app-toast-message',
    template: `
    <div [ngClass]="data.class">
      <div class="toast-content">  
        <strong>{{ data.title }}</strong><br />
        <small *ngIf="data.detail">{{ data.detail }}</small>
      </div>
      <button class="toast-close" (click)="close()">✕</button>

    </div>
  `,
  
  styleUrls: ['./toast-message.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ToastMessageComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private snackBarRef: MatSnackBarRef<ToastMessageComponent>
  ) {}

  close() {
    this.snackBarRef.dismiss();
  }
}