import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { CommonButtonComponent } from 'src/layers/shared/ui/button/common-button/common-button.component';
import { DialogWindowFeedbackComponent } from '../dialog-window-feedback/dialog-window-feedback.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-auto-trade-in',
  templateUrl: './auto-trade-in.component.html',
  styleUrls: ['./auto-trade-in.component.css'],
  imports: [CommonButtonComponent, MatSliderModule],
  standalone: true,
})
export class AutoTradeInComponent {
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
