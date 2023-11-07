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
  slides: Array<{ title: string }> = [
    {
      title: 'Slide 1',
    },
    {
      title: 'Slide 2',
    },
    {
      title: 'Slide 3',
    },
    {
      title: 'Slide 4',
    },
    {
      title: 'Slide 5',
    },
    {
      title: 'Slide 6',
    },
    {
      title: 'Slide 7',
    },
    {
      title: 'Slide 8',
    },
  ];

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 25,
    // breakpoints: {
    //   320: { slidesPerView: 1.5 },
    //   768: { slidesPerView: 2.5 },
    //   1280: { slidesPerView: 3.5 },
    // },
    navigation: true,
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: true,
      draggable: true,
    },
  };
}
