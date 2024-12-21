import { Injectable } from '@angular/core';
import {CampingAttribute} from '../models/CampingAttribute.model';
import {Car} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CampingService {
  private attributes: CampingAttribute[] = [
    {
      id: 0,
      name: "TENT",
      thumbnail: '/assets/images/camping/tent/main.jpg',
      details: [
        '/assets/images/camping/tent/tent-1.jpg',
        '/assets/images/camping/tent/tent-2.jpg',
        '/assets/images/camping/tent/tent-3.jpg',
        '/assets/images/camping/tent/tent-4.jpg'
      ]
    },
    {
      id: 1,
      name: "SLEEPING_BAG",
      thumbnail: '/assets/images/camping/sleeping-bag/main.jpg',
      details: [
       '/assets/images/camping/sleeping-bag/sleeping-bag-1.jpg',
       '/assets/images/camping/sleeping-bag/sleeping-bag-2.jpg',
       '/assets/images/camping/sleeping-bag/sleeping-bag-3.jpg',
       '/assets/images/camping/sleeping-bag/sleeping-bag-4.jpg',
       '/assets/images/camping/sleeping-bag/sleeping-bag-5.jpg',
      ]
    },
    {
      id: 2,
      name: "CAMPING_BAG",
      thumbnail: '/assets/images/camping/hiking-bag/main.jpg',
      details: [
        '/assets/images/camping/hiking-bag/hiking-bag-1.jpg',
        '/assets/images/camping/hiking-bag/hiking-bag-2.jpg',
        '/assets/images/camping/hiking-bag/hiking-bag-3.jpg',
        '/assets/images/camping/hiking-bag/hiking-bag-4.jpg',
        '/assets/images/camping/hiking-bag/hiking-bag-5.jpg'
      ]
    }
  ]

  getAttributes(): Car[] {
    return this.attributes;
  }

  constructor() { }
}
