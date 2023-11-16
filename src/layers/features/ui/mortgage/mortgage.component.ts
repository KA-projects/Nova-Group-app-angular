import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonButtonComponent } from 'src/layers/shared/ui/button/common-button/common-button.component';
import { SliderComponent } from 'src/layers/shared/ui/slider/slider.component';
import { DialogWindowFeedbackComponent } from '../dialog-window-feedback/dialog-window-feedback.component';

@Component({
  selector: 'app-mortgage',
  standalone: true,
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css'],
  imports: [SliderComponent, CommonButtonComponent],
})
export class MortgageComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogWindowFeedbackComponent, {
      width: '90%',
      maxWidth: '370px',
      maxHeight: '700px',
      panelClass: ['rounded-3xl', 'overflow-hidden'],
      backdropClass: ['bg-black/60'],
      autoFocus: false,
    });
  }
}
