import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchApartmentDetailsFromRapidApi } from 'database/rapid-api';
import { four } from 'localData/four';
import { third } from 'localData/third';
import { two } from 'localData/two';
import { debounce } from 'src/layers/entities/lib/debounce';

import { ApartmentDetailsType } from 'src/layers/shared/types';
import { Swiper, SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css'],
})
export class ApartmentDetailsComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  constructor(private route: ActivatedRoute) {}

  private prevScrollpos!: number;
  private bottomNavbarElement!: HTMLElement;
  private navbarElement!: HTMLElement;
  private debouncedHandleScroll!: () => void;

  haveAmentities: boolean | undefined = undefined;

  swiper?: Swiper;
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      clickable: true,
    },
    navigation: true,
  };

  apartmentDetails: ApartmentDetailsType | undefined;

  ngOnInit() {
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

  async ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;

    const routeParams = this.route.snapshot.paramMap;
    const externalIdFromRoute = routeParams.get('externalId');

    if (externalIdFromRoute) {
      const fetchData = async () => {
        const data = await fetchApartmentDetailsFromRapidApi(
          externalIdFromRoute
        );

        this.apartmentDetails = data;
        console.log(data);
      };
      await fetchData();

      this.haveAmentities = this.apartmentDetails?.amenities
        ? this.apartmentDetails.amenities.length >= 2
        : false;
    } else {
      alert(
        `Incorrect externalId: ${externalIdFromRoute}. Please return main page`
      );
    }
  }

  htmlParser(xmlString: string) {
    const withBrTeg = xmlString.replace(/\n/g, '<br/>');
    const doc = new DOMParser().parseFromString(withBrTeg, 'text/html');

    return doc.body.innerHTML;
  }

  convertDatetime(inputDatetime: string) {
    // Create a new Date object from the input string
    const dateObj = new Date(inputDatetime);

    // Format the date as required
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const formattedDate = dateObj.toLocaleDateString('en-US', options);

    return formattedDate;
  }

  private handleScroll() {
    let currentScrollPos = window.scrollY;

    if (this.bottomNavbarElement) {
      if (this.prevScrollpos > currentScrollPos) {
        this.bottomNavbarElement.style.bottom = '0';
      } else {
        this.bottomNavbarElement.style.bottom = '-100px';
      }
    }
    if (this.prevScrollpos < currentScrollPos || currentScrollPos < 100) {
      this.navbarElement.style.top = '0';
    } else {
      this.navbarElement.style.top = '-100px';
    }
    this.prevScrollpos = currentScrollPos;
  }
}
