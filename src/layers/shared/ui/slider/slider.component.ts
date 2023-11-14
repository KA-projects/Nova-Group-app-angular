import { Component, Input } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ThemePalette } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { CalculateMortgageService } from 'src/layers/features/lib/calculate-mortgage.service';

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
  ],
  providers: [CalculateMortgageService],
})
export class SliderComponent {
  @Input({ required: true }) percentage!: number;
  propertyValue = 365325;
  downPayment = 102300;
  year = 1;

  color: ThemePalette = 'primary';

  constructor(private service: CalculateMortgageService) {}

  get calculate() {
    const monthlyPayment = this.service.calculateMortgage(
      this.propertyValue,
      this.downPayment,
      this.percentage,
      this.year
    );

    return monthlyPayment;
  }
}
