import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotrainsComponent } from './totrains.component';

describe('TotrainsComponent', () => {
  let component: TotrainsComponent;
  let fixture: ComponentFixture<TotrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotrainsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
