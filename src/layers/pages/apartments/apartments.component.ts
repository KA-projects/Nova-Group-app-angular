import { AfterViewInit, Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { filterData } from 'database/filterData';
import { fetchRapidApi } from 'database/rapid-api';

import { BayutData } from 'src/layers/widgets/types';
import { initialRapidApiSearchParams } from '../config';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css'],
})
export class ApartmentsComponent implements AfterViewInit {
  constructor(private router: Router) {}

  apartments: BayutData | undefined = undefined;

  filterData = filterData;

  private baseRapidApiUrl = 'https://bayut.p.rapidapi.com/properties/list';

  selectedValues: { [key: string]: any } = {};

  pageIndex: number = 0;

  async ngAfterViewInit() {
    const currentPageSearchString = window.location.search;
    const newRapidApiUrl = this.baseRapidApiUrl + currentPageSearchString;
    await this.fetchApartmentsData(newRapidApiUrl);

    const searchParams = new URLSearchParams(window.location.search);
    const pageIndex = Number(searchParams.get('page'));
    this.pageIndex = pageIndex;
  }

  async fetchApartmentsData(url: string): Promise<void> {
    this.apartments = undefined;
    const rapidApiData = await fetchRapidApi(url);
    this.apartments = rapidApiData.hits;
  }

  async searchByParams(type: string, e: MatSelectChange) {
    const value = e.value as string;

    const currentPageUrl = new URL(window.location.href);
    currentPageUrl.searchParams.set(type, value);

    const newRapidApiUrl = this.baseRapidApiUrl + currentPageUrl.search;
    await this.fetchApartmentsData(newRapidApiUrl);

    const updatedCurrentPathname =
      currentPageUrl.pathname + currentPageUrl.search;

    this.router.navigateByUrl(updatedCurrentPathname, { replaceUrl: true });
  }

  async reset() {
    const rapidApiUrl = this.baseRapidApiUrl + initialRapidApiSearchParams;

    await this.fetchApartmentsData(rapidApiUrl);

    const initialPathname =
      window.location.pathname + initialRapidApiSearchParams;

    Object.keys(this.selectedValues).forEach((key) => {
      this.selectedValues[key] = null;
    });

    this.router.navigateByUrl(initialPathname, { replaceUrl: true });
  }

  async handlePageEvent(event: PageEvent) {
    const currentPageUrl = new URL(window.location.href);

    currentPageUrl.searchParams.set('page', event.pageIndex.toString());
    currentPageUrl.searchParams.set('hitsPerPage', event.pageSize.toString());

    const newRapidApiUrl = this.baseRapidApiUrl + currentPageUrl.search;

    await this.fetchApartmentsData(newRapidApiUrl);

    const updatedCurrentPathname =
      currentPageUrl.pathname + currentPageUrl.search;

    this.router.navigateByUrl(updatedCurrentPathname, { replaceUrl: true });
  }
}
