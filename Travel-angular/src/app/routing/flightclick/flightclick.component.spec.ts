import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightclickComponent } from './flightclick.component';

describe('FlightclickComponent', () => {
  let component: FlightclickComponent;
  let fixture: ComponentFixture<FlightclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
