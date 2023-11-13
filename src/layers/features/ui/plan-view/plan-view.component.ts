import { NgComponentOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Plan } from '../../types';
import { MortgageComponent } from '../mortgage/mortgage.component';
import { InstallmentComponent } from '../installment/installment.component';
import { TradeInComponent } from '../trade-in/trade-in.component';
import { AutoTradeInComponent } from '../auto-trade-in/auto-trade-in.component';

const PLAN_VIEWS: Record<Plan, any> = {
  mortgage: MortgageComponent,
  installment: InstallmentComponent,
  tradein: TradeInComponent,
  autotradein: AutoTradeInComponent,
};

@Component({
  selector: 'app-plan-view',
  standalone: true,

  template: '<ng-container *ngComponentOutlet="planView"></ng-container>',
  imports: [NgComponentOutlet],
})
export class PlanViewComponent {
  @Input() plan!: Plan;
  get planView(): any {
    const PlanViewComponent = PLAN_VIEWS[this.plan];
    return PlanViewComponent;
  }
}
