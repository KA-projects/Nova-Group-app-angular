import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filterData } from 'database/filterData';
import { ferchData } from 'database/rapid-api';
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
    'https://bayut.p.rapidapi.com/properties/list?lang=en&locationExternalIDs=5002&purpose=for-sale&categoryExternalID=4&hitsPerPage=25&page=1&sort=city-level-score';

  async ngOnInit() {
    console.log('init!!!!!!!!!!!!!!!!!!!!!');
  }

  async ngAfterViewInit() {
    // console.log('afterView');
    // const rapidApiData = await this.fetchDataFromRapidApi(this.rapidApiUrl);
    // console.log('data: ', rapidApiData.hits);
    // this.apartments = rapidApiData.hits;

    setTimeout(() => {
      //@ts-ignore
      this.apartments = dataThird.hits;
    }, 2000);
  }

  async searchByParams(type: string, e: Event) {
    //@ts-ignore
    const value = e.target.value as string;

    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    console.log('result: ', this.rapidApiUrl + '&' + searchParams);
    const url = this.rapidApiUrl + '&' + searchParams;

    // this.apartments = undefined;
    // const rapidApiData = await this.fetchDataFromRapidApi(url);

    // this.apartments = rapidApiData.hits;

    // console.log('data from search: ', data.hits);

    // setTimeout(() => {
    //   //@ts-ignore
    //   this.apartments = dataThird.hits;
    // }, 2000);

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    this.router.navigateByUrl(newPathname, { replaceUrl: true });
  }

  async fetchDataFromRapidApi(url: string) {
    return await ferchData(url);
    alert('done!!!!');
  }

  async reset() {
    // const url = this.rapidApiUrl;

    // this.apartments = undefined;
    // const rapidApiData = await this.fetchDataFromRapidApi(url);

    // this.apartments = rapidApiData.hits;

    const newPathname = window.location.pathname;

    this.router.navigateByUrl(newPathname, { replaceUrl: true });
  }
}
