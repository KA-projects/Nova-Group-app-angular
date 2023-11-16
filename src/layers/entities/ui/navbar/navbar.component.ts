import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounce } from '../../lib/debounce';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit, OnDestroy {
  private prevScrollpos!: number;
  private navbarElement!: HTMLElement;
  private debouncedHandleScroll!: () => void;

  ngOnInit(): void {
    this.prevScrollpos = window.scrollY;
    this.navbarElement = document.getElementById('navbar') as HTMLElement;

    this.debouncedHandleScroll = debounce(this.handleScroll.bind(this), 50);

    // window.onscroll = this.debouncedHandleScroll;
  }

  ngOnDestroy(): void {
    window.onscroll = null;
  }

  private handleScroll() {
    let currentScrollPos = window.scrollY;
    console.log('one');
    if (this.prevScrollpos < currentScrollPos) {
      this.navbarElement.style.top = '0';
    } else {
      this.navbarElement.style.top = '-100px';
    }
    this.prevScrollpos = currentScrollPos;
  }
}
