import { Component } from '@angular/core';

import { BayutData } from 'src/layers/widgets/types';
import { ApartmentsService } from '../../lib/apartments.service';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css'],
})
export class MarqueeComponent {
  constructor(private apartmentsService: ApartmentsService) {}

  apartments: BayutData | undefined = this.apartmentsService.getApartments;
}
