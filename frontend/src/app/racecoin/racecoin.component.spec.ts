import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacecoinComponent } from './racecoin.component';

describe('RacecoinComponent', () => {
  let component: RacecoinComponent;
  let fixture: ComponentFixture<RacecoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RacecoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacecoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
