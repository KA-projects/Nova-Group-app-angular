import { Component } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarContainer,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SnackBarForFeedbackComponent } from '../snack-bar-for-feedback/snack-bar-for-feedback';

@Component({
  selector: 'app-client-consultation',
  standalone: true,
  templateUrl: './client-consultation.component.html',
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  styles: [
    `
      :host {
        display: block;
        background: #fff;
        border-radius: 8px;
        padding: 16px;
      }
    `,
  ],
  // providers: [MatSnackBarContainer],
})
export class ClientConsultationComponent {
  name!: string;
  telephone!: string;

  constructor(
    private snackBar: MatSnackBar // private snackBarContainerComponent: MatSnackBarContainer
  ) {}

  onSubmit(e: SubmitEvent) {
    e.preventDefault();
    console.log('form submit and value :', name);

    this.snackBar.openFromComponent(SnackBarForFeedbackComponent, {
      // duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      //important css class
      panelClass: ['snack-bar-container'],
    }).containerInstance;
  }
}