import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabclickComponent } from './cabclick.component';

describe('CabclickComponent', () => {
  let component: CabclickComponent;
  let fixture: ComponentFixture<CabclickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabclickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
