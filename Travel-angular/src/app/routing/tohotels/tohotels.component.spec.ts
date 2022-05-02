import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TohotelsComponent } from './tohotels.component';

describe('TohotelsComponent', () => {
  let component: TohotelsComponent;
  let fixture: ComponentFixture<TohotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TohotelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TohotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
