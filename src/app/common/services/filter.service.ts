import { productFilterss } from '../../../database/product-filters';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const productTypes = ['Top Products'];


@Injectable({
  providedIn: 'root'
})
export class FilterService {
  constructor(private http: HttpClient) {}

  getAllFilterCategories() {
    return of(productFilterss);
  }
}
