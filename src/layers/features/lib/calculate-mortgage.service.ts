import { Injectable } from '@angular/core';

@Injectable()
export class CalculateMortgageService {
  constructor() {}

  calculateMortgage(
    realEstatePrice: number,
    downPayment: number,
    annualInterestRate: number,
    loanTermYears: number
  ) {
    // Loan amount
    let loanAmount = realEstatePrice - downPayment;
    // Monthly interest rate
    let monthlyInterestRate = annualInterestRate / 100 / 12;

    // Number of monthly payments
    let numberOfPayments = loanTermYears * 12;

    // Mortgage payment formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    let monthlyPayment =
      (loanAmount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments))) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return monthlyPayment;
  }
}
