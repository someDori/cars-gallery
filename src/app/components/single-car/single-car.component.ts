import {Component, Input} from '@angular/core';
import {Car} from '../../models/car.model';

@Component({
  selector: 'app-single-car',
  imports: [],
  templateUrl: './single-car.component.html',
  styleUrl: './single-car.component.scss'
})
export class SingleCarComponent {
  @Input() car: Car | null = null;
}
