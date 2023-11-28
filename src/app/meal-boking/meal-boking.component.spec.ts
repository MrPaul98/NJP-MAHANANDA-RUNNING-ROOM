import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealBokingComponent } from './meal-boking.component';

describe('MealBokingComponent', () => {
  let component: MealBokingComponent;
  let fixture: ComponentFixture<MealBokingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealBokingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealBokingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
