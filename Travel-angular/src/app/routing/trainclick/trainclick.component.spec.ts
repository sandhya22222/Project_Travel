import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainclickComponent } from './trainclick.component';

describe('TrainclickComponent', () => {
  let component: TrainclickComponent;
  let fixture: ComponentFixture<TrainclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
