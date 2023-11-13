import { Component } from '@angular/core';
import { SliderComponent } from 'src/layers/shared/ui/slider/slider/slider.component';

@Component({
  selector: 'app-mortgage',
  standalone: true,
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css'],
  imports: [SliderComponent],
})
export class MortgageComponent {}
