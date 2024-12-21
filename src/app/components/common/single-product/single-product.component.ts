import {Component, Input} from '@angular/core';
import {CampingAttribute} from '../../../models/CampingAttribute.model';
import {Car} from '../../../models/car.model';

@Component({
  selector: 'app-single-product',
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  @Input() element: CampingAttribute | Car | null  = null;
}
