import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ThemePalette } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { calculateMortgage } from 'src/layers/features/lib/calculate-mortgage';
import { CommonButtonComponent } from '../../button/common-button/common-button.component';

/**
 * @title Configurable slider
 */
@Component({
  selector: 'app-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSliderModule,
    CommonModule,
    CommonButtonComponent,
  ],
})
export class SliderComponent {
  propertyValue = 365325;
  downPayment = 102300;
  year = 1;
  percentage = 12;
  color: ThemePalette = 'primary';

  get calculate() {
    const monthlyPayment = calculateMortgage(
      this.propertyValue,
      this.downPayment,
      this.percentage,
      this.year
    );

    return monthlyPayment;
  }
}
