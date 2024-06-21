import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categories2Component } from './categories-2.component';

describe('Categories2Component', () => {
  let component: Categories2Component;
  let fixture: ComponentFixture<Categories2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categories2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categories2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
