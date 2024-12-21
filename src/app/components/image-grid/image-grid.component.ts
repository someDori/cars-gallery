import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from '../../models/car.model';
import {NgForOf} from '@angular/common';
import {SingleProductComponent} from '../common/single-product/single-product.component';

@Component({
  selector: 'app-image-grid',
  imports: [
    NgForOf,
    SingleProductComponent
  ],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.scss'
})
export class ImageGridComponent {
  @Input() cars: Car[] = [];
  @Output() carSelected = new EventEmitter<Car>();

  onCarClick(car: Car): void {
    setTimeout(() => {
      this.carSelected.emit(car);
    }, 100)
  }
}
