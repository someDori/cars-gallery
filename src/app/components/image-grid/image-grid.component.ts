import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from '../../models/car.model';
import {NgForOf} from '@angular/common';
import {SingleCarComponent} from '../single-car/single-car.component';

@Component({
  selector: 'app-image-grid',
  imports: [
    NgForOf,
    SingleCarComponent
  ],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss'
})
export class ImageGridComponent {
  @Input() cars: Car[] = [];
  @Output() carSelected = new EventEmitter<Car>();

  onCarClick(car: Car): void {
    this.carSelected.emit(car);
  }
}
