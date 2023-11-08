import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogWindowForFilterComponent } from '../dialog-window-for-filter/dialog-window-for-filter.component';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class FilterButtonComponent {
  constructor(private dialogWindow: MatDialog) {}

  openDialogWindow(): void {
    this.dialogWindow.open(DialogWindowForFilterComponent);
  }
}
