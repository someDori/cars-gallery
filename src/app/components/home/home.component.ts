import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {TranslateModule, TranslatePipe} from '@ngx-translate/core';
import {GalleryComponent} from '../gallery/gallery.component';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    TranslatePipe,
    GalleryComponent,
    TranslateModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
