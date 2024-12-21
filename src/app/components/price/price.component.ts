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
  public priceInGel: number = 60;
  public priceInUSD: number | null = null;
  public defaultPriceInUSD: number = 25;
  public error: string = '';
  public language: string = "";

  constructor(
    public translationService: TranslationService,
    private currencyService: CurrencyService
  ) {}

  ngOnInit() {
    this.currencyService.convertAmount(this.priceInGel, 'GEL', 'USD').subscribe({
      next: (usdAmount) => {
        this.priceInUSD = usdAmount;
      },
      error: (error) => {
        this.error = error.message;
        this.priceInUSD = this.defaultPriceInUSD;
      }
    })
  }

  public getPriceText(): string {
    if (this.translationService.currentLanguage === 'ge') {
      return `იქირავე ${this.priceInGel} ლარიდან`;
    }
    const usdPrice = this.priceInUSD ?? this.defaultPriceInUSD;
    return `Rent from ${usdPrice} dollars`;
  }
}
