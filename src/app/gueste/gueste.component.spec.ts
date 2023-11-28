import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuesteComponent } from './gueste.component';

describe('GuesteComponent', () => {
  let component: GuesteComponent;
  let fixture: ComponentFixture<GuesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuesteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
