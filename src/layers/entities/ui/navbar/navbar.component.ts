import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounce } from '../../lib/debounce';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  // private prevScrollpos!: number;
  // private bottomNavbarElement!: HTMLElement;
  // private navbarElement!: HTMLElement;
  // private debouncedHandleScroll!: () => void;
  // ngOnInit(): void {
  //   this.prevScrollpos = window.scrollY;
  //   this.bottomNavbarElement = document.getElementById(
  //     'bottomNavbar'
  //   ) as HTMLElement;
  //   this.navbarElement = document.getElementById('navbar') as HTMLElement;
  //   this.debouncedHandleScroll = debounce(this.handleScroll.bind(this), 50);
  //   window.onscroll = this.debouncedHandleScroll;
  // }
  // ngOnDestroy(): void {
  //   window.onscroll = null;
  // }
  // private handleScroll() {
  //   let currentScrollPos = window.scrollY;
  //   console.log(this.bottomNavbarElement);
  //   if (this.bottomNavbarElement) {
  //     if (this.prevScrollpos > currentScrollPos) {
  //       this.bottomNavbarElement.style.bottom = '0';
  //     } else {
  //       this.bottomNavbarElement.style.bottom = '-100px';
  //     }
  //   }
  //   if (this.prevScrollpos < currentScrollPos || currentScrollPos < 100) {
  //     this.navbarElement.style.top = '0';
  //   } else {
  //     this.navbarElement.style.top = '-100px';
  //   }
  //   this.prevScrollpos = currentScrollPos;
  // }
}
