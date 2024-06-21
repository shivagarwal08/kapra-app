import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewArrivalComponent } from './blog-new-arrival.component';

describe('BlogNewArrivalComponent', () => {
  let component: BlogNewArrivalComponent;
  let fixture: ComponentFixture<BlogNewArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogNewArrivalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogNewArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
