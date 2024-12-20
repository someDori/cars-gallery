import { Component } from '@angular/core';
import {TranslationService} from '../../services/translation.service';
import {CurrencyService} from '../../services/currency.service';

@Component({
  selector: 'app-price',
  imports: [],
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {
  private priceInGel: number = 60;
  private priceInUSD: number | null = null;
  private error: string = '';
  public language: string = "";

  constructor(public translationService: TranslationService, private currencyService: CurrencyService) {
  }

  ngOnInit() {
    this.currencyService.convertAmount(this.priceInGel, 'GEL', 'USD').subscribe({
      next: (usdAmount) => {
        this.priceInUSD = usdAmount;
      },
      error: (error) => {
        this.error = error.message;
      }
    })
  }

  public getPriceText(): string {
    if (this.translationService.currentLanguage === 'ge') {
      return `იქირავე ${this.priceInGel} ლარიდან`;
    }
    return `Rent from ${this.priceInUSD} dollars`;
  }
}
