import { Component } from '@angular/core';
import { FooterSliderComponent } from '../../common/components/footer-slider/footer-slider.component';
import { FooterComponent } from '../../common/components/footer/footer.component';
import { NavTertiary2Component } from '../../components/nav-tertiary-2/nav-tertiary-2.component';
import { NavDark2Component } from './../../components/nav-dark-2/nav-dark-2.component';
import { BannerComponent } from './../banner/banner.component';
import { ProductPageComponent } from './../product-page/product-page.component';

@Component({
  selector: 'app-main-shop',
  standalone: true,
  imports: [
    NavDark2Component,
    NavTertiary2Component,
    BannerComponent,
    ProductPageComponent,
    FooterSliderComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
