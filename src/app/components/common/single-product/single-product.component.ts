import {Component, Input} from '@angular/core';
import {CampingAttribute} from '../../../models/CampingAttribute.model';
import {Car} from '../../../models/car.model';
import {TranslationService} from '../../../services/translation.service';

@Component({
  selector: 'app-single-product',
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss'
})
export class SingleProductComponent {
  @Input() element: CampingAttribute | Car | null  = null;

  constructor(
    public translationService: TranslationService,
  ) {}

  public getElementName(element: CampingAttribute | Car): string {
    if (this.isCampingAttribute(element)) {
      return this.translationService.getTranslation(element.name);
    }
    return element.name;
  }

  private isCampingAttribute(element: CampingAttribute | Car): boolean {
    return (element as CampingAttribute).name !== undefined;
  }
}
