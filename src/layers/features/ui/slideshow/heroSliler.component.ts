import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './heroSlider.component.html',
})
export class HeroSliderComponent implements AfterViewInit {
  swiper?: Swiper;
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;

  heroImagesForSwiper: Array<{ src: string }> = [
    { src: 'assets/hero1.jpg' },
    { src: 'assets/hero2.jpg' },
    { src: 'assets/hero3.jpg' },
    { src: 'assets/hero4.jpg' },
  ];

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // navigation: true,
    // scrollbar: {
    //   enabled: true,
    //   draggable: true,
    // },
    // slideNextClass
    injectStyles: [
      `
      .swiper-button-next, .swiper-button-prev {
        background-color: #000 !important;
        color: #000 !important;
      }
      .swiper-container::part(button-next) {
        background-color: #000 !important;
        color: #000 !important;
      }
      .swiper-button-next::part(button-next) {
        background-color: #000 !important;
        color: #000 !important;
      }
      .
      `,
    ],
  };
}
