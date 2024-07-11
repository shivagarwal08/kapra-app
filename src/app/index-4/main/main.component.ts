import { SubscribeComponent } from './../../common/components/subscribe/subscribe.component';
import { Component } from '@angular/core';
import { BlogNewArrivalComponent } from './../../components/blog-new-arrival/blog-new-arrival.component';
import { BusinessInformation2Component } from './../../components/business-information-2/business-information-2.component';
import { Categories2Component } from './../../components/categories-2/categories-2.component';
import { DealOfTheMonthComponent } from './../../components/deal-of-the-month/deal-of-the-month.component';
import { Feedback2Component } from './../../components/feedback-2/feedback-2.component';
import { Feedback3Component } from './../../components/feedback-3/feedback-3.component';
import { FooterSliderComponent } from './../../common/components/footer-slider/footer-slider.component';
import { FooterComponent } from './../../common/components/footer/footer.component';
import { InstagramTopComponent } from './../../components/instagram-top/instagram-top.component';
import { NavDarkComponent } from './../../components/nav-dark/nav-dark.component';
import { ProductsTopComponent } from './../../components/products-top/products-top.component';
import { TrendingFashionComponent } from './../../components/trending-fashion/trending-fashion.component';
import { BlogComponent } from './../blog/blog.component';
import { CategoriesComponent } from './../categories/categories.component';
import { Hero3Component } from './../hero-3/hero-3.component';
import { OfferComponent } from './../offer/offer.component';
import { ProductsComponent } from './../products/products.component';

@Component({
  selector: 'app-main-index-4',
  standalone: true,
  imports: [
    NavDarkComponent,
    Hero3Component,
    BusinessInformation2Component,
    Categories2Component,
    ProductsTopComponent,
    DealOfTheMonthComponent,
    BlogNewArrivalComponent,
    Feedback3Component,
    TrendingFashionComponent,
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
