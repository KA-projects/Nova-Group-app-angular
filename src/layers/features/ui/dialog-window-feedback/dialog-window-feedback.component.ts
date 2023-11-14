import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-window-feedback',
  templateUrl: './dialog-window-feedback.component.html',
  styleUrls: ['./dialog-window-feedback.component.css'],
  standalone: true,
})
export class DialogWindowFeedbackComponent {
  onSubmit(e: SubmitEvent) {
    e.preventDefault();
  }
}
