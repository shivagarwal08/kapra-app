import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingFashionComponent } from './trending-fashion.component';

describe('TrendingFashionComponent', () => {
  let component: TrendingFashionComponent;
  let fixture: ComponentFixture<TrendingFashionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingFashionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingFashionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
