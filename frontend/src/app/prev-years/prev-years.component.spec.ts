import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevYearsComponent } from './prev-years.component';

describe('PrevYearsComponent', () => {
  let component: PrevYearsComponent;
  let fixture: ComponentFixture<PrevYearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevYearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
