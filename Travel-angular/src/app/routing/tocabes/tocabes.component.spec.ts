import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TocabesComponent } from './tocabes.component';

describe('TocabesComponent', () => {
  let component: TocabesComponent;
  let fixture: ComponentFixture<TocabesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TocabesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TocabesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
