import { Component } from '@angular/core';
import { debounce } from '../../lib/debounce';

@Component({
  selector: 'app-bottom-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css'],
})
export class BottomNavbarComponent {
  private prevScrollpos!: number;
  private bottomNavbarElement!: HTMLElement;
  private navbarElement!: HTMLElement;
  private debouncedHandleScroll!: () => void;

  ngOnInit(): void {
    this.prevScrollpos = window.scrollY;

    this.bottomNavbarElement = document.getElementById(
      'bottomNavbar'
    ) as HTMLElement;
    this.navbarElement = document.getElementById('navbar') as HTMLElement;

    this.debouncedHandleScroll = debounce(this.handleScroll.bind(this), 50);

    window.onscroll = this.debouncedHandleScroll;
  }

  ngOnDestroy(): void {
    window.onscroll = null;
    this.navbarElement.style.top = '0';
  }

  private handleScroll() {
    let currentScrollPos = window.scrollY;

    if (this.prevScrollpos > currentScrollPos) {
      this.bottomNavbarElement.style.bottom = '0';
    } else {
      this.bottomNavbarElement.style.bottom = '-100px';
    }

    if (this.prevScrollpos < currentScrollPos) {
      this.navbarElement.style.top = '0';
    } else {
      this.navbarElement.style.top = '-100px';
    }
    this.prevScrollpos = currentScrollPos;
  }
}
