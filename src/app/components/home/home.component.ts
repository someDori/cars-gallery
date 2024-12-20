import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {TranslateModule} from '@ngx-translate/core';
import {AppDetailsComponent} from '../details/app-details.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TranslateModule,
    AppDetailsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
