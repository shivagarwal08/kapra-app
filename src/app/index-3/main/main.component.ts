import { Component } from '@angular/core';
import { NavTertiary2Component } from '../../components/nav-tertiary-2/nav-tertiary-2.component';
import { SubscribeComponent } from '../../common/components/subscribe/subscribe.component';
import { Feedback2Component } from './../../components/feedback-2/feedback-2.component';
import { FooterSliderComponent } from './../../components/footer-slider/footer-slider.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { InstagramTopComponent } from './../../components/instagram-top/instagram-top.component';
import { NavDark2Component } from './../../components/nav-dark-2/nav-dark-2.component';
import { BlogComponent } from './../blog/blog.component';
import { CategoriesComponent } from './../categories/categories.component';
import { Hero2Component } from './../hero-2/hero-2.component';
import { OfferComponent } from './../offer/offer.component';
import { ProductsComponent } from './../products/products.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NavDark2Component,
    NavTertiary2Component,
    Hero2Component,
    CategoriesComponent,
    ProductsComponent,
    OfferComponent,
    Feedback2Component,
    BlogComponent,
    InstagramTopComponent,
    SubscribeComponent,
    FooterSliderComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
