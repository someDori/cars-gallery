import { Injectable } from '@angular/core';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private cars: Car[] = [
    {
      id: 0,
      name: "2025 Toyota Camry",
      thumbnail: '/assets/images/2025-toyota-camry/main.avif',
      details: [
        '/assets/images/2025-toyota-camry/2025-toyota-camry-1.avif',
        '/assets/images/2025-toyota-camry/2025-toyota-camry-2.avif',
      ]
    },
    {
      id: 1,
      name: "Hyundai Tucson",
      thumbnail: '/assets/images/hyundai-tucson/main.jpeg',
      details: [
        '/assets/images/hyundai-tucson/hyundai-tucson-1.jpeg',
        '/assets/images/hyundai-tucson/hyundai-tucson-2.jpeg',
        '/assets/images/hyundai-tucson/hyundai-tucson-3.jpeg',
        '/assets/images/hyundai-tucson/hyundai-tucson-4.avif',
        '/assets/images/hyundai-tucson/hyundai-tucson-5.jpeg',
      ]
    },
    {
      id: 2,
      name: "Tesla Model 3",
      thumbnail: '/assets/images/tesla-model-3/main.avif',
      details: [
        '/assets/images/tesla-model-3/tesla-model-3-1.avif',
        '/assets/images/tesla-model-3/tesla-model-3-2.avif',
        '/assets/images/tesla-model-3/tesla-model-3-3.avif',
        '/assets/images/tesla-model-3/tesla-model-3-4.avif'
      ]
    }
  ];

  getCars(): Car[] {
    return this.cars;
  }

  constructor() { }
}
