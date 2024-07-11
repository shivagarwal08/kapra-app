import { Component } from '@angular/core';
import { BannerComponent } from '../../wishlist/banner/banner.component';
import { FooterSliderComponent } from './../../common/components/footer-slider/footer-slider.component';
import { FooterComponent } from './../../common/components/footer/footer.component';
import { NavDark2Component } from './../../components/nav-dark-2/nav-dark-2.component';
import { NavTertiary2Component } from './../../components/nav-tertiary-2/nav-tertiary-2.component';

@Component({
  selector: 'app-main-wish',
  standalone: true,
  imports: [
    NavDark2Component,
    NavTertiary2Component,
    BannerComponent,
    FooterSliderComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
