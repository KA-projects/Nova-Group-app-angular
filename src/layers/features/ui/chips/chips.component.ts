import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { purchaseMethodsTitlesText } from '../../config/purchase-methods';
import { Plan } from '../../types';
import { PlanViewComponent } from '../plan-view/plan-view.component';

/**
 * @title Basic chips
 */
@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  standalone: true,
  imports: [MatChipsModule, CommonModule, PlanViewComponent],
})
export class ChipsComponent {
  plan: Plan = 'mortgage';
  purchaseMethodsTitles = purchaseMethodsTitlesText;

  purchaseMethods = this.purchaseMethodsTitles.map((method) =>
    method.toLowerCase().replace(/[\s-]/g, '')
  ) as unknown as Plan[];

  isTypePlan(purchaseMethod: any): purchaseMethod is Plan {
    return this.purchaseMethods.includes(purchaseMethod);
  }

  setPurchaseMethodComponent(e: MatChipListboxChange) {
    if (!e.value) {
      this.plan = e.value;
      return;
    }

    const chipOfTitle = String(e.value);
    const textValue = chipOfTitle.toLowerCase().replace(/[\s-]/g, '');
    //undefined and selected adn do constant purchaseMethodsTitles
    const havePurchaseMethod = this.purchaseMethods.some(
      (purchaseMethod) => purchaseMethod === textValue
    );

    if (this.isTypePlan(textValue) && havePurchaseMethod) {
      this.plan = textValue;
      console.log(true);
    } else {
      throw new Error('const chipOfTitle is not of type Plan');
    }
  }
}
