import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar-for-feedback',
  standalone: true,
  templateUrl: './snack-bar-for-feedback.component.html',
  imports: [MatButtonModule, MatSnackBarModule],
})
export class SnackBarForFeedbackComponent {
  snackBarRef = inject(MatSnackBarRef);
}
