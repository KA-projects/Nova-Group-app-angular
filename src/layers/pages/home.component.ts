import { Component } from '@angular/core';
import { FooterComponent } from '../entities/ui/footer/footer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  prevScrollPosition: number = 0;
  visible: boolean = true;

  handleScroll() {
    const currentScrollPosition = window.scrollY;
    console.log(this.visible);

    if (currentScrollPosition > this.prevScrollPosition) {
      this.visible = true;
    } else {
      this.visible = false;
    }

    this.prevScrollPosition = currentScrollPosition;
  }
}
