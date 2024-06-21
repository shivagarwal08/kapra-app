import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTopComponent } from './products-top.component';

describe('ProductsTopComponent', () => {
  let component: ProductsTopComponent;
  let fixture: ComponentFixture<ProductsTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsTopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
