import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'dialog-window-for-filter',
  templateUrl: './dialog-window-for-filter.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogWindowForFilterComponent {}
