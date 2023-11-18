import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filterData, getFilterValues } from 'database/filterData';

import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonButtonComponent } from 'src/layers/shared/ui/button/common-button/common-button.component';
import { ApartmentsService } from '../../lib/apartments.service';

@Component({
  selector: 'dialog-window-for-filter',
  templateUrl: './dialog-window-for-filter.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    CommonModule,
    MatSelectModule,
    FormsModule,
    CommonButtonComponent,
  ],
})
export class DialogWindowForFilterComponent implements OnInit {
  constructor(
    private closeDialog: MatDialogRef<DialogWindowForFilterComponent>,
    private apartmentService: ApartmentsService
  ) {}

  furnished!: string;
  rooms!: number;
  baths!: number;

  filterData = filterData;

  ngOnInit(): void {
    this.closeDialog.beforeClosed().subscribe(() => {
      this.closeDialog.addPanelClass(['slide-panel-bottom', 'panel']);
    });
  }

  // searchProperties(e: Event, queryName: string) {
  //   //@ts-ignore
  //   const textValue = e.target.value as string;
  //   const filterValue = { [queryName]: textValue };
  //   const values = getFilterValues(filterValue);
  //   console.log(values);
  // }

  searchProperties(rooms: number, baths: number, furnished: string) {
    this.apartmentService.filterProperties(rooms, baths, furnished);
    this.close();
  }

  close() {
    this.closeDialog.close();
  }
  reserForm() {
    //@ts-ignore
    (this.furnished = ''), (this.baths = null);
    //@ts-ignore
    this.rooms = null;
  }
}
