import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from '../../models/car.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-detail-view',
  imports: [
    NgForOf,
  ],
  templateUrl: './detail-view.component.html',
  styleUrl: './detail-view.component.scss'
})
export class DetailViewComponent {
  @Input() car: Car | null = null;
  @Output() close = new EventEmitter<void>();
  selectedImage: string = '';

  ngOnInit(): void {
    if (this.car) {
      this.selectedImage = this.car.thumbnail;
    }
  }

  onClose(): void {
    this.close.emit();
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }
}
