import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  public currentCurrency: string = "";
  public currentLanguage: string = "";

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);

    this.updateLanguageAndCurrency(savedLang);
  }

  switchLanguage(language: string): void {
    setTimeout(() => {
      this.translate.use(language);
      localStorage.setItem('language', language);
      this.updateLanguageAndCurrency(language);
    }, 100)
  }

  private updateLanguageAndCurrency(language: string): void {
    this.currentLanguage = language;
    this.currentCurrency = this.switchCurrency(language);
  }

  private switchCurrency(language: string): string {
    return language === 'ge' ? 'GEL' : 'USD';
  }

  getTranslation(key: string): string {
    return this.translate.instant(key); // Get translated value
  }
}
