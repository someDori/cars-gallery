import {Component, inject} from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import {SingleLocationComponent} from '../common/location/single-location.component';

@Component({
  selector: 'app-locations-list',
  imports: [
    SingleLocationComponent
  ],
  templateUrl: './locations-list.component.html',
  styleUrl: './locations-list.component.scss'
})
export class LocationsListComponent {
  protected locationsService: LocationsService = inject(LocationsService);
}
