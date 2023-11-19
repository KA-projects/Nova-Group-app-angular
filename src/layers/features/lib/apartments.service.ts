import { Injectable } from '@angular/core';
import { fetchRapidApi } from 'database/rapid-api';
import { bayutData } from 'localData/bayut-data';
import { BehaviorSubject } from 'rxjs';
import { BauytData } from 'src/layers/widgets/types';

@Injectable({
  providedIn: 'root',
})
export class ApartmentsService {
  constructor() {}
  private originalApartments: BauytData | undefined = undefined;

  behaviorSubject = new BehaviorSubject<BauytData | undefined>(
    this.originalApartments
  );

  get getApartments() {
    return this.behaviorSubject.value;
  }

  async fetchApartmentsData(): Promise<void> {
    const rapidApiUrl =
      'https://bayut.p.rapidapi.com/properties/list?lang=en&locationExternalIDs=5002&purpose=for-sale&categoryExternalID=4&hitsPerPage=10&page=0&sort=city-level-score';

    this.originalApartments = undefined;
    const rapidApiData = await fetchRapidApi(rapidApiUrl);

    this.originalApartments = rapidApiData.hits;
    this.behaviorSubject.next(rapidApiData.hits);
  }

  filterProperties(rooms: number, baths: number, isFurnished: string) {
    const data = this.originalApartments?.filter((item) => {
      return (
        (!rooms || item.rooms === rooms) &&
        (!baths || item.baths === baths) &&
        (!isFurnished || item.furnishingStatus === isFurnished)
      );
    });

    this.behaviorSubject.next(data);
  }
}
