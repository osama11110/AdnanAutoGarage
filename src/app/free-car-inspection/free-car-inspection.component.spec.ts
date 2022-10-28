import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCarInspectionComponent } from './free-car-inspection.component';

describe('FreeCarInspectionComponent', () => {
  let component: FreeCarInspectionComponent;
  let fixture: ComponentFixture<FreeCarInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCarInspectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeCarInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
