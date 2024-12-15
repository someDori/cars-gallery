import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cars-gallery';
  defaultLang = "";

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.defaultLang = this.translate.defaultLang;
  }

  public switchLanguage(language: string): void {
    this.translate.use(language);
    this.defaultLang = this.translate.currentLang;
  }
}
