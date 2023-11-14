import { Component } from '@angular/core';
import { CommonButtonComponent } from 'src/layers/shared/ui/button/common-button/common-button.component';
import { SliderComponent } from 'src/layers/shared/ui/slider/slider.component';
import { DialogWindowFeedbackComponent } from '../dialog-window-feedback/dialog-window-feedback.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-installment',
  templateUrl: './installment.component.html',
  styleUrls: ['./installment.component.css'],
  imports: [SliderComponent, CommonButtonComponent],
  standalone: true,
})
export class InstallmentComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogWindowFeedbackComponent, {
      width: '90%',
      maxWidth: '370px',
      height: '80%',
      panelClass: ['rounded-3xl', 'overflow-hidden'],
      backdropClass: ['bg-black/60'],
      autoFocus: false,
    });
  }
}
