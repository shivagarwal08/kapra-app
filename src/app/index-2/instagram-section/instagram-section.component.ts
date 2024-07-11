import { Component } from '@angular/core';

const instaTiles = [
  {
    img: 'assets/img/insta-img-1.png'
  },
  {
    img: 'assets/img/insta-img-2.png'
  },
  {
    img: 'assets/img/insta-img-3.png'
  },
  {
    img: 'assets/img/insta-img-4.png'
  },
  {
    img: 'assets/img/insta-img-5.png'
  }
];
@Component({
  selector: 'app-instagram-section',
  standalone: true,
  imports: [],
  templateUrl: './instagram-section.component.html',
  styleUrl: './instagram-section.component.scss'
})
export class InstagramSectionComponent {
  instaTiles = instaTiles;
}
