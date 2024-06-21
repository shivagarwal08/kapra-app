import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealOfTheMonthComponent } from './deal-of-the-month.component';

describe('DealOfTheMonthComponent', () => {
  let component: DealOfTheMonthComponent;
  let fixture: ComponentFixture<DealOfTheMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealOfTheMonthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealOfTheMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
