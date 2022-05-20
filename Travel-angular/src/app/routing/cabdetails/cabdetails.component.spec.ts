import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabdetailsComponent } from './cabdetails.component';

describe('CabdetailsComponent', () => {
  let component: CabdetailsComponent;
  let fixture: ComponentFixture<CabdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
