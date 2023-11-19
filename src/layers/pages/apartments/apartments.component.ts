import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  MatPaginatorSelectConfig,
  PageEvent,
} from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { filterData } from 'database/filterData';
import { fetchRapidApi } from 'database/rapid-api';
import { dataThird } from 'localData/bayut-data-third';
import { dataTwo } from 'localData/bayut-data-two';
import { ApartmentsService } from 'src/layers/features/lib/apartments.service';
import { BauytData } from 'src/layers/widgets/types';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent implements OnInit, AfterViewInit {
  constructor(
    private apartmentsService: ApartmentsService,
    private router: Router
  ) {}

  // apartments: BauytData = this.apartmentsService.getApartments;
  apartments: BauytData | undefined = undefined;

  filterData = filterData;

  rapidApiUrl =
    'https://bayut.p.rapidapi.com/properties/list?lang=en&locationExternalIDs=5002&purpose=for-sale&categoryExternalID=4&hitsPerPage=10&page=0&sort=city-level-score';

  selectedValues: { [key: string]: any } = {};

  async ngOnInit() {
    console.log('init!!!!!!!!!!!!!!!!!!!!!');
  }

  async ngAfterViewInit() {
    // await this.fetchApartmentsData(this.rapidApiUrl)

    setTimeout(() => {
      //@ts-ignore
      this.apartments = dataThird.hits;
    }, 2000);
  }

  async searchByParams(type: string, e: MatSelectChange) {
    const value = e.value as string;

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    // const newRapidApiUrl = this.rapidApiUrl + '&' + searchParams;
    // await this.fetchApartmentsData(newRapidApiUrl)

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    this.router.navigateByUrl(newPathname, { replaceUrl: true });
  }

  async fetchApartmentsData(url: string): Promise<void> {
    this.apartments = undefined;
    const rapidApiData = await fetchRapidApi(url);
    this.apartments = rapidApiData.hits;
  }

  async reset() {
    // await this.fetchApartmentsData(this.rapidApiUrl)

    const newPathname = window.location.pathname;

    Object.keys(this.selectedValues).forEach((key) => {
      // You can set it to the default value if you have one
      this.selectedValues[key] = null;
    });

    this.router.navigateByUrl(newPathname, { replaceUrl: true });
  }

  async handlePageEvent(event: PageEvent) {
    const currentPageSearchParams = new URLSearchParams(window.location.search);

    const rapidApiUrl = new URL(this.rapidApiUrl);
    rapidApiUrl.searchParams.set('page', event.pageIndex.toString());
    rapidApiUrl.searchParams.set('hitsPerPage', event.pageSize.toString());

    const newRapidApiUrl = rapidApiUrl.href + '&' + currentPageSearchParams;

    await this.fetchApartmentsData(newRapidApiUrl);

    const newPathname = `${
      window.location.pathname
    }?${currentPageSearchParams.toString()}`;

    console.log(newRapidApiUrl.toString());

    this.router.navigateByUrl(newPathname, { replaceUrl: true });
  }
}
