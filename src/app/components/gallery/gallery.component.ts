import { Component } from '@angular/core';
import { Car } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';
import {ImageGridComponent} from '../image-grid/image-grid.component';
import {NgIf} from '@angular/common';
import {DetailViewComponent} from '../detail-view/detail-view.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    ImageGridComponent,
    NgIf,
    DetailViewComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  cars: Car[] = [];
  selectedCar: Car | null = null;

  constructor(private carsService: CarsService) {
    this.cars = this.carsService.getCars();
  }

  onCarSelect(car: Car): void {
    this.selectedCar = car;
  }

  onClose(): void {
    this.selectedCar = null;
  }
}
