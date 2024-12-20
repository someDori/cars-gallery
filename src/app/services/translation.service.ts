import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  currentLanguage: string = 'en';
  defaultLang = "";

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.currentLanguage);
    this.defaultLang = this.translate.defaultLang;
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    this.defaultLang = this.translate.currentLang;
  }
}
