import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private cars: Car[] = [
    {
      id: 0,
      name: "2010 Toyota Prius",
      thumbnail: '/assets/images/cars/2010-toyota-prius/main.avif',
      details: [
        '/assets/images/cars/2010-toyota-prius/2010-toyota-prius-1.avif',
        '/assets/images/cars/2010-toyota-prius/2010-toyota-prius-2.avif',
        '/assets/images/cars/2010-toyota-prius/2010-toyota-prius-3.avif',
        '/assets/images/cars/2010-toyota-prius/2010-toyota-prius-4.avif',
        '/assets/images/cars/2010-toyota-prius/2010-toyota-prius-5.avif',
        '/assets/images/cars/2010-toyota-prius/2010-toyota-prius-6.avif',
        '/assets/images/cars/2010-toyota-prius/2010-toyota-prius-7.avif',
        '/assets/images/cars/2010-toyota-prius/2010-toyota-prius-8.avif'
      ]
    },
    {
      id: 1,
      name: "2012 Toyota Prius",
      thumbnail: '/assets/images/cars/2012-toyota-prius/main.avif',
      details: [
        '/assets/images/cars/2012-toyota-prius/2012-toyota-prius-1.avif',
        '/assets/images/cars/2012-toyota-prius/2012-toyota-prius-2.avif',
        '/assets/images/cars/2012-toyota-prius/2012-toyota-prius-3.avif',
        '/assets/images/cars/2012-toyota-prius/2012-toyota-prius-4.avif',
        '/assets/images/cars/2012-toyota-prius/2012-toyota-prius-5.avif',
        '/assets/images/cars/2012-toyota-prius/2012-toyota-prius-6.avif',
      ]
    },
    {
      id: 3,
      name: "Nissan Versa",
      thumbnail: '/assets/images/cars/nissan-versa/main.avif',
      details: [
        '/assets/images/cars/nissan-versa/nissan-versa-1.avif',
        '/assets/images/cars/nissan-versa/nissan-versa-2.avif',
        '/assets/images/cars/nissan-versa/nissan-versa-3.avif',
        '/assets/images/cars/nissan-versa/nissan-versa-4.avif',
        '/assets/images/cars/nissan-versa/nissan-versa-5.avif'
      ]
    },
    {
      id: 4,
      name: "1998 Honda Civic",
      thumbnail: '/assets/images/cars/1998-honda-civic/main.avif',
      details: [
        '/assets/images/cars/1998-honda-civic/1998-honda-civic-1.avif',
        '/assets/images/cars/1998-honda-civic/1998-honda-civic-2.avif',
        '/assets/images/cars/1998-honda-civic/1998-honda-civic-3.avif',
        '/assets/images/cars/1998-honda-civic/1998-honda-civic-4.avif',
        '/assets/images/cars/1998-honda-civic/1998-honda-civic-5.avif'
      ]
    },
    {
      id: 5,
      name: "2012 Fiat 500",
      thumbnail: '/assets/images/cars/2012-fiat-500/main.avif',
      details: [
        '/assets/images/cars/2012-fiat-500/2012-fiat-500-1.avif',
        '/assets/images/cars/2012-fiat-500/2012-fiat-500-2.avif',
        '/assets/images/cars/2012-fiat-500/2012-fiat-500-3.jpg'
      ]
    }
  ];

  getCars(): Car[] {
    return this.cars;
  }

  constructor() { }
}
