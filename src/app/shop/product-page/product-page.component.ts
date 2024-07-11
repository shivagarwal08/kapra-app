import { Filter } from './../../../models/filter.model';
import { products } from './../../../database/products';
import { FilterService } from './../../common/services/filter.service';
import { RouterLink } from '@angular/router';
import { Component, OnInit, inject } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

const productPriceFilters = [
  'Under $50',
  '$50-$100',
  '$100-200',
  '$300-$400',
  '$400-$600'
];
const productRatingFilters = [
  { label: '5.0', star: 5, id: 1 },
  { label: '4.0 & up', star: 4, id: 2 },
  { label: '3.0 & up', star: 3, id: 3 },
  { label: '2.0 & up', star: 2, id: 4 },
  { label: '1.0 & up', star: 1, id: 5 }
];

const productSizeFilters = ['XM', 'S', 'M', 'L', 'XL', 'XXL'];

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [RouterLink, NgbRatingModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {
  filterService = inject(FilterService);
  filters: any = [];
  products = products;
  productPriceFilters = productPriceFilters;
  productRatingFilters = productRatingFilters;
  productSizeFilters = productSizeFilters;

  ngOnInit() {
    this.filterService.getAllFilterCategories().subscribe((filters: any) => {
      this.formatFilters(filters);
    });
  }

  formatFilters(filters: Filter[]) {
    this.filters = filters.map((filter: Filter) => {
      return {
        name: filter.name
      };
    });
  }

  getArray(num: number) {
    const arr = [...Array(num).keys()].map(i => i + 1);
    console.log(arr);
    return arr;
  }
  getArrayFrom(num: number) {
    const arr = [...Array(5 - num).keys()].map(i => i + num + 1);
    console.log(arr);
    return arr;
  }
}
