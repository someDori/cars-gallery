import { Component } from '@angular/core';
import {GalleryComponent} from '../gallery/gallery.component';
import {PriceComponent} from '../price/price.component';
import {LocationsListComponent} from '../locations-list/locations-list.component';

@Component({
  selector: 'app-details',
  imports: [
    GalleryComponent,
    PriceComponent,
    LocationsListComponent
  ],
  templateUrl: './app-details.component.html',
  styleUrl: './app-details.component.scss'
})
export class AppDetailsComponent {

}
