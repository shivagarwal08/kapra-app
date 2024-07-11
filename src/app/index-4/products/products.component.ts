import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-index-4',
  standalone: true,
  imports: [RouterLink, NgbRatingModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
