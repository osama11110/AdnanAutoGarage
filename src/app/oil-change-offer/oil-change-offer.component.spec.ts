import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OilChangeOfferComponent } from './oil-change-offer.component';

describe('OilChangeOfferComponent', () => {
  let component: OilChangeOfferComponent;
  let fixture: ComponentFixture<OilChangeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OilChangeOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OilChangeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
