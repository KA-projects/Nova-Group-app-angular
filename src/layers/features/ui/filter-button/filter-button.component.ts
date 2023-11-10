import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DialogWindowForFilterComponent } from '../dialog-window-for-filter/dialog-window-for-filter.component';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class FilterButtonComponent {
  constructor(private dialogWindow: MatDialog) {}

  async openDialogWindow(): Promise<void> {
    this.dialogWindow.open(DialogWindowForFilterComponent, {
      backdropClass: ['bg-black/60', 'backdrop-blur'],
      maxWidth: '100%',
      panelClass: ['panel'],
      exitAnimationDuration: 300,
    });

    // await fetchApi({ page: 0, purpose: 'for-sale' });
  }
}
