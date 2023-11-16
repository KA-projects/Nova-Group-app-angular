import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonButtonComponent } from 'src/layers/shared/ui/button/common-button/common-button.component';
import { DialogWindowFeedbackComponent } from '../dialog-window-feedback/dialog-window-feedback.component';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-trade-in',
  templateUrl: './trade-in.component.html',
  styleUrls: ['./trade-in.component.css'],
  imports: [CommonButtonComponent, MatSliderModule],
  standalone: true,
})
export class TradeInComponent {
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
