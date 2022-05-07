import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TobusesComponent } from './tobuses.component';

describe('TobusesComponent', () => {
  let component: TobusesComponent;
  let fixture: ComponentFixture<TobusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TobusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TobusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
