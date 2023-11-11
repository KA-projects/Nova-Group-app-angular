import { Component } from '@angular/core';
import { BauytData } from '../../types';
import { bayutData } from 'localData/bayut-data';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
})
export class ApartmentListComponent {
  apartments: BauytData = bayutData.slice(0, 10);
}
