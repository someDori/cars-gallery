import {Component, Input} from '@angular/core';
import {CampingAttribute} from '../../../models/CampingAttribute.model';
import {Car} from '../../../models/car.model';
import {TranslationService} from '../../../services/translation.service';
import {CurrencyService} from '../../../services/currency.service';

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
      if (this.translationService.currentLanguage === 'ge') {
        return this.translationService.getTranslation(element.name); // Fetch translation from ge.json
      }
      return this.translationService.getTranslation(element.name); // Default to English or fallback
    }
    return element.name; // Replace `carName` with the correct property
  }

  private isCampingAttribute(element: CampingAttribute | Car): boolean {
    return (element as CampingAttribute).name !== undefined;
  }
}
