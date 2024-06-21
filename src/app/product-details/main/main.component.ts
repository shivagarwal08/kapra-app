import { Component } from '@angular/core';
import { FooterSliderComponent } from './../../components/footer-slider/footer-slider.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { NavDark2Component } from './../../components/nav-dark-2/nav-dark-2.component';
import { NavTertiary2Component } from './../../components/nav-tertiary-2/nav-tertiary-2.component';
import { BannerComponent } from './../banner/banner.component';

@Component({
  selector: 'app-main',
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
