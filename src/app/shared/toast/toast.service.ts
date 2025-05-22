import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastMessageComponent } from './toast-message.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private snackBar: MatSnackBar) {}

  success(title: string, detail?: string, duration = 30000) {
    this.snackBar.openFromComponent(ToastMessageComponent, {
      duration,
      // data: { title, detail },
      data: { title, detail, class: 'toast-success' },  // 👈 importante
      // panelClass: ['toast-success'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

  error(title: string, detail?: string, duration = 40000) {
    this.snackBar.openFromComponent(ToastMessageComponent, {
      duration,
      // data: { title, detail },
      data: { title, detail, class: 'toast-error' },  // 👈 importante
      // panelClass: ['toast-error'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

  info(title: string, detail?: string, duration = 30000) {
    this.snackBar.openFromComponent(ToastMessageComponent, {
      duration,
      data: { title, detail },
      panelClass: ['toast-info'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

warning(title: string, detail?: string, duration = 35000) {
    this.snackBar.openFromComponent(ToastMessageComponent, {
      duration,
      data: { title, detail },
      panelClass: ['toast-warning'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }

}
