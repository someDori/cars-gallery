import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {TranslateModule} from '@ngx-translate/core';
import {AppDetailsComponent} from '../details/app-details.component';
import {CampingAttributesComponent} from '../camping-attributes/camping-attributes.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TranslateModule,
    AppDetailsComponent,
    CampingAttributesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
