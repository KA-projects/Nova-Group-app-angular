import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fetchApartmentDetailsFromRapidApi } from 'database/rapid-api';
import { apartmentDetails } from 'localData/apartmentDetails';
import { ApartmentDetailsType } from 'src/layers/shared/types';
import { Swiper, SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css'],
})
export class ApartmentDetailsComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute) {}

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

  apartmentDetails: ApartmentDetailsType = apartmentDetails;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const externalIdFromRoute = routeParams.get('externalId');

    // if (externalIdFromRoute) {
    //   const fetchData = async () => {
    //     const data = await fetchApartmentDetailsFromRapidApi(
    //       externalIdFromRoute
    //     );
    //     console.log(data);
    //   };
    //   fetchData();
    // }
  }

  ngAfterViewInit(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  htmlParser(xmlString: string) {
    const doc = new DOMParser().parseFromString(xmlString, 'text/html');

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
}
