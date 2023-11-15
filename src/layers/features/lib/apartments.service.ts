import { Injectable } from '@angular/core';
import { bayutData } from 'localData/bayut-data';
import { BehaviorSubject } from 'rxjs';
import { BauytData } from 'src/layers/widgets/types';

@Injectable({
  providedIn: 'root',
})
export class ApartmentsService {
  constructor() {}
  private originalApartments = bayutData.slice(0, 10);
  behaviorSubject = new BehaviorSubject<BauytData>(this.originalApartments);

  get getApartments() {
    return this.behaviorSubject.value;
  }

  filterProperties(rooms: number, baths: number, isFurnished: string) {
    const data = this.originalApartments.filter((item) => {
      return (
        (!rooms || item.rooms === rooms) &&
        (!baths || item.baths === baths) &&
        (!isFurnished || item.furnishingStatus === isFurnished)
      );
    });

    this.behaviorSubject.next(data);
  }
}
