import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CampingAttribute} from '../../../models/CampingAttribute.model';
import {Car} from '../../../models/car.model';

@Component({
  selector: 'app-product-detailed-view',
  imports: [],
  templateUrl: './product-detailed-view.component.html',
  styleUrl: './product-detailed-view.component.scss'
})
export class ProductDetailedViewComponent {
  @Input() product: CampingAttribute | Car | null  = null;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  selectedProductImage: string = '';

  ngOnInit(): void {
    if (this.product) {
      this.selectedProductImage = this.product.thumbnail;
    }
  }

  onClose(): void {
    this.close.emit();
  }

  selectProduct(image: string): void {
    this.selectedProductImage = image;
  }
}
