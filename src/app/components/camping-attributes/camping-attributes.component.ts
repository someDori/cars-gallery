import {Component, inject} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {CampingAttribute} from '../../models/CampingAttribute.model';
import {CampingService} from '../../services/camping.service';
import {AttributesGridComponent} from '../attributes-grid/attributes-grid.component';
import {AttributeDetailViewComponent} from '../attribute-detail-view/attribute-detail-view.component';

@Component({
  selector: 'app-camping-attributes',
  imports: [
    TranslatePipe,
    AttributesGridComponent,
    AttributeDetailViewComponent
  ],
  templateUrl: './camping-attributes.component.html',
  styleUrl: './camping-attributes.component.scss'
})
export class CampingAttributesComponent {
  private campingService: CampingService = inject(CampingService);
  campingAttributes: CampingAttribute[] = [];
  selectedAttribute: CampingAttribute | null = null;

  ngOnInit() {
    setTimeout(() => {
      this.campingAttributes = this.campingService.getAttributes();
    }, 200)
  }

  onAttributeSelected(attribute: CampingAttribute): void {
    setTimeout(() => {
      this.selectedAttribute = attribute;
    }, 450)
  }

  onClose(): void {
    this.selectedAttribute = null;
  }
}
