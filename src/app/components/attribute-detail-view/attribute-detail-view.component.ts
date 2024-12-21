import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CampingAttribute} from '../../models/CampingAttribute.model';
import {NgForOf} from '@angular/common';
import {TranslationService} from '../../services/translation.service';

@Component({
  selector: 'app-attribute-detail-view',
  imports: [
    NgForOf
  ],
  templateUrl: './attribute-detail-view.component.html',
  styleUrl: './attribute-detail-view.component.scss'
})
export class AttributeDetailViewComponent {
  @Input() attribute: CampingAttribute | null  = null;
  @Output() close: EventEmitter<void> = new EventEmitter<void>();
  selectedAttribute: string = '';
  
  constructor(
    public translationService: TranslationService,
  ) {}

  ngOnInit(): void {
    if (this.attribute) {
      this.selectedAttribute = this.attribute.thumbnail;
    }
  }

  onClose(): void {
    this.close.emit();
  }

  selectImage(image: string): void {
    this.selectedAttribute = image;
  }
}
