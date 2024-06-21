import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailsErrorComponent } from './blog-details-error.component';

describe('BlogDetailsErrorComponent', () => {
  let component: BlogDetailsErrorComponent;
  let fixture: ComponentFixture<BlogDetailsErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogDetailsErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDetailsErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
