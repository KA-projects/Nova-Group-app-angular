import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BayutData } from '../../types';

import { ApartmentsService } from 'src/layers/features/lib/apartments.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
})
export class ApartmentListComponent implements OnInit, AfterViewInit {
  constructor(private apartmentsService: ApartmentsService) {}

  apartments: BayutData | undefined = undefined;

  ngOnInit(): void {
    this.apartmentsService.behaviorSubject.subscribe((newValue) => {
      this.apartments = newValue;
    });
  }

  async ngAfterViewInit() {
    await this.apartmentsService.fetchApartmentsData();
    this.apartments = this.apartmentsService.getApartments;
  }
}
