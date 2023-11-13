import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-button',
  standalone: true,
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.css'],
})
export class CommonButtonComponent {
  @Input({ required: true }) text!: string;
}
