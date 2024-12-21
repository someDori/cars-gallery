import {Component, Input} from '@angular/core';
import {TranslationService} from '../../../services/translation.service';

@Component({
  selector: 'app-single-location',
  imports: [],
  templateUrl: './single-location.component.html',
  styleUrl: './single-location.component.scss'
})
export class SingleLocationComponent {
  @Input() location: string | null = null;

  constructor(
    public translationService: TranslationService
  ) {}
}
