import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatSnackBarConfig,
  MatSnackBarModule,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-for-feedback',
  standalone: true,
  templateUrl: './snack-bar-for-feedback.component.html',
  imports: [MatButtonModule, MatSnackBarModule],
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
        overflow: hidden;
      }
    `,
  ],
})
export class SnackBarForFeedbackComponent {
  snackBarRef = inject(MatSnackBarRef);
  // s = inject(MatSnackBarConfig);
}
