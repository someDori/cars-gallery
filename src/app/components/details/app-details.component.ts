import { Component } from '@angular/core';
import {GalleryComponent} from '../gallery/gallery.component';
import {PriceComponent} from '../price/price.component';

@Component({
  selector: 'app-details',
  imports: [
    GalleryComponent,
    PriceComponent
  ],
  templateUrl: './app-details.component.html',
  styleUrl: './app-details.component.scss'
})
export class AppDetailsComponent {

}
