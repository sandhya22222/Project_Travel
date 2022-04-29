import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnLdFlightsComponent } from './bn-ld-flights.component';

describe('BnLdFlightsComponent', () => {
  let component: BnLdFlightsComponent;
  let fixture: ComponentFixture<BnLdFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnLdFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BnLdFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
