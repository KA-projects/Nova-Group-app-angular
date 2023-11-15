import { Component, OnInit } from '@angular/core';
import { BauytData } from '../../types';
import { bayutData } from 'localData/bayut-data';
import { ApartmentsService } from 'src/layers/features/lib/apartments.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
})
export class ApartmentListComponent implements OnInit {
  constructor(private apartmentsService: ApartmentsService) {}

  apartments: BauytData = this.apartmentsService.getApartments;

  ngOnInit(): void {
    this.apartmentsService.behaviorSubject.subscribe((newValue) => {
      this.apartments = newValue;
    });
  }
}
