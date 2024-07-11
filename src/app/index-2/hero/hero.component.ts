import { RouterLink, RouterLinkActive } from '@angular/router';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
const slides = [
  {
    img: 'assets/img/hero-slider-img-1.png',
    text1: 'Shop the latest trends',
    text2: 'Find Your Perfect Look Today',
    text3: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, to Sed ut perspiciatis unde
  omnis iste natus error sitperspiciatis unde omnis .`
  },
  {
    img: 'assets/img/hero-slider-img-1.png',
    text1: 'Shop the latest trends',
    text2: 'Find Your Perfect Look Today',
    text3: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem
  accusantium doloremque laudantium, to Sed ut perspiciatis unde
  omnis iste natus error sitperspiciatis unde omnis .`
  }
];
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgbCarouselModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  slides = slides;
}
