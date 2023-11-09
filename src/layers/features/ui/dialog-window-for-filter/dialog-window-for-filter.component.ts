import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dialog-window-for-filter',
  templateUrl: './dialog-window-for-filter.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogWindowForFilterComponent implements OnInit {
  constructor(
    private closeDialog: MatDialogRef<DialogWindowForFilterComponent>
  ) {}

  ngOnInit(): void {
    this.closeDialog.beforeClosed().subscribe(() => {
      this.closeDialog.addPanelClass(['remove-panel', 'panel']);
    });
  }
}
