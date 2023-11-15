import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
})
export class FooterComponent {
  texts = 'consectetur adipiscing elit eiusmod tempor incididunt labore'.split(
    ' '
  );
}
