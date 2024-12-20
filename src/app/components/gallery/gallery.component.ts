import {Component, inject} from '@angular/core';
import { Car } from '../../models/car.model';
import { CarsService } from '../../services/cars.service';
import { ImageGridComponent } from '../image-grid/image-grid.component';
import { DetailViewComponent } from '../detail-view/detail-view.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    ImageGridComponent,
    DetailViewComponent,
    TranslateModule,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  private carsService: CarsService = inject(CarsService);
  cars: Car[] = [];
  selectedCar: Car | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.cars = this.carsService.getCars();
    }, 200)
  }

  onCarSelect(car: Car): void {
    setTimeout(() => {
      this.selectedCar = car;
      }, 450)
  }

  onClose(): void {
    this.selectedCar = null;
  }
}
