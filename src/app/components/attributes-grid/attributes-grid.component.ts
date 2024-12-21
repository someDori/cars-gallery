import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CampingAttribute} from '../../models/CampingAttribute.model';
import {NgForOf} from '@angular/common';
import {SingleProductComponent} from '../common/single-product/single-product.component';

@Component({
  selector: 'app-attributes-grid',
  imports: [
    NgForOf,
    SingleProductComponent
  ],
  templateUrl: './attributes-grid.component.html',
  styleUrl: './attributes-grid.component.scss'
})
export class AttributesGridComponent {
  @Input() attributes: CampingAttribute[] = [];
  @Output() attributeSelected = new EventEmitter<CampingAttribute>();

  onAttributeClick(attribute: CampingAttribute): void {
    setTimeout(() => {
      this.attributeSelected.emit(attribute);
    }, 100)
  }
}
