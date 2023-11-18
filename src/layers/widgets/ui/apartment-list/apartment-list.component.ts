import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BauytData } from '../../types';
import { bayutData } from 'localData/bayut-data';
import { ApartmentsService } from 'src/layers/features/lib/apartments.service';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
})
export class ApartmentListComponent implements OnInit, AfterViewInit {
  constructor(private apartmentsService: ApartmentsService) {}

  apartments: BauytData | undefined = undefined;

  ngOnInit(): void {
    this.apartmentsService.behaviorSubject.subscribe((newValue) => {
      this.apartments = newValue;
    });
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   //@ts-ignore
    //   this.apartments = this.apartmentsService.getApartments;
    // }, 4000);
  }
}
