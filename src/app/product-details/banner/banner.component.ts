import { StarsComponent } from './../../common/components/stars/stars.component';
import { RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
const slides = [
  {
    thumnails: [
      'assets/img/product-thumb-1.png',
      'assets/img/product-thumb-2.png',
      'assets/img/product-thumb-3.png'
    ],
    img: 'assets/img/product-slider-img-1.png',
    order: 1
  },
  {
    thumnails: [
      'assets/img/product-thumb-2.png',
      'assets/img/product-thumb-3.png',
      'assets/img/product-thumb-1.png'
    ],
    img: 'assets/img/product-slider-img-2.png',
    order: 2
  },
  {
    thumnails: [
      'assets/img/product-thumb-3.png',
      'assets/img/product-thumb-1.png',
      'assets/img/product-thumb-2.png'
    ],
    img: 'assets/img/product-slider-img-3.png',
    order: 3
  }
];

const slidesSimilarProducts = [
  [
    {
      img: 'assets/img/product-img-7.png',
      name: 'Green Middy Dress',
      price: 150
    },
    { img: 'assets/img/product-img-8.png', name: 'Red OverCoat', price: 150 },
    {
      img: 'assets/img/product-img-9.png',
      name: 'Yellow Middy Dress',
      price: 150
    }
  ],
  [
    { img: 'assets/img/product-img-8.png', name: 'Red OverCoat', price: 150 },
    {
      img: 'assets/img/product-img-9.png',
      name: 'Yellow Middy Dress',
      price: 150
    },
    {
      img: 'assets/img/product-img-7.png',
      name: 'Green Middy Dress',
      price: 150
    }
  ],
  [
    {
      img: 'assets/img/product-img-9.png',
      name: 'Yellow Middy Dress',
      price: 150
    },
    {
      img: 'assets/img/product-img-7.png',
      name: 'Green Middy Dress',
      price: 150
    },
    { img: 'assets/img/product-img-8.png', name: 'Red OverCoat', price: 150 }
  ]
];

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    RouterLink,
    NgbCarouselModule,
    StarsComponent,
    NgbNavModule,
    NgbRatingModule
  ],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent implements OnInit {
  slides = slides;
  slidesSimilarProducts = slidesSimilarProducts;

  constructor() {}

  ngOnInit() {}
}
