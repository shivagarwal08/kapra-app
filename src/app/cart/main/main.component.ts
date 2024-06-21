import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { NoItemComponent } from '../no-item/no-item.component';
import { FooterSliderComponent } from './../../components/footer-slider/footer-slider.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { NavDark2Component } from './../../components/nav-dark-2/nav-dark-2.component';
import { NavTertiary2Component } from './../../components/nav-tertiary-2/nav-tertiary-2.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavDark2Component,
    NavTertiary2Component,
    BannerComponent,
    NoItemComponent,
    FooterSliderComponent,
    FooterComponent

  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
