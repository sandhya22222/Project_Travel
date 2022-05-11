import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusclickComponent } from './busclick.component';

describe('BusclickComponent', () => {
  let component: BusclickComponent;
  let fixture: ComponentFixture<BusclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
