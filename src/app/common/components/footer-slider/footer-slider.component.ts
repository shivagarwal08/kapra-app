import { Component, OnInit } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer-slider',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './footer-slider.component.html',
  styleUrl: './footer-slider.component.scss'
})
export class FooterSliderComponent implements OnInit {
  slides = [
    [
      'assets/img/footer-slider-img-1.png',
      'assets/img/footer-slider-img-2.png',
      'assets/img/footer-slider-img-3.png',
      'assets/img/footer-slider-img-4.png'
    ],
    [
      'assets/img/footer-slider-img-2.png',
      'assets/img/footer-slider-img-3.png',
      'assets/img/footer-slider-img-4.png',
      'assets/img/footer-slider-img-1.png'
    ],
    [
      'assets/img/footer-slider-img-3.png',
      'assets/img/footer-slider-img-4.png',
      'assets/img/footer-slider-img-1.png',
      'assets/img/footer-slider-img-2.png'
    ],
    [
      'assets/img/footer-slider-img-4.png',
      'assets/img/footer-slider-img-1.png',
      'assets/img/footer-slider-img-2.png',
      'assets/img/footer-slider-img-3.png'
    ]
  ];

  constructor() {}

  ngOnInit() {}
}
