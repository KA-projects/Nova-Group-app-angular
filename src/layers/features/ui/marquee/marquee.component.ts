import { Component } from '@angular/core';
import { bayutData } from 'localData/bayut-data';
import { BauytData } from 'src/layers/widgets/types';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.css'],
})
export class MarqueeComponent {
  apartments: BauytData = bayutData.slice(0, 6);
}
