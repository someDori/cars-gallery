import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeDetailViewComponent } from './attribute-detail-view.component';

describe('AttributeDetailViewComponent', () => {
  let component: AttributeDetailViewComponent;
  let fixture: ComponentFixture<AttributeDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeDetailViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
