import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelclickComponent } from './hotelclick.component';

describe('HotelclickComponent', () => {
  let component: HotelclickComponent;
  let fixture: ComponentFixture<HotelclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
