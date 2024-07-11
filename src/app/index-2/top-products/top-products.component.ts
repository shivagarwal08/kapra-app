import { Component } from '@angular/core';
import { NgbNavChangeEvent, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { products } from './../../../database/products';
const TopProductsTypes: string[] = [
  'New Products',
  'Featured Products',
  'On Sale Products',
  'Trending Products'
];

@Component({
  selector: 'app-top-products',
  standalone: true,
  imports: [NgbNavModule],
  templateUrl: './top-products.component.html',
  styleUrl: './top-products.component.scss'
})
export class TopProductsComponent {
  topProductsTypes: string[] = TopProductsTypes;
  products = products;
  activeId: number = 0;
  selectedProducts = products;
  ngOnInit(): void {
    this.filterProducts(0);    
  }

  onNavChange(changeEvent: NgbNavChangeEvent) {
    console.log('changeEvent:', changeEvent);
    const selected = changeEvent.nextId;
    this.filterProducts(selected);

    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }
  filterProducts(index: number) {
    let selected = this.topProductsTypes[index];
    console.log(selected);
    this.selectedProducts = this.products.filter((product:any) =>
      product.filterSubCategory.includes(selected)
    );
  }
}
