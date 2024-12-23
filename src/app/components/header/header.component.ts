import {Component, HostListener} from '@angular/core';
import {TranslationService} from '../../services/translation.service';
import {TranslatePipe} from '@ngx-translate/core';
import {ContactDataService} from '../../services/contact-data.service';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public getScreenWidth: any;
  public headerText: any;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.headerText = this.headerTextSize();
  }

  constructor(public translationService: TranslationService, public contactDataService: ContactDataService) {}

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.headerText = this.headerTextSize();
  }

  public headerTextSize(): string {
    return window.innerWidth < 768 ? "TITLE_SMALL" : "TITLE";
  }
}
