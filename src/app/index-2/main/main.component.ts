import { Component } from '@angular/core';
import { BlogsComponent } from '../blogs/blogs.component';
import { BusinessInformationComponent } from '../business-information/business-information.component';
import { CtaComponent } from '../cta/cta.component';
import { FeedbackSectionComponent } from '../feedback-section/feedback-section.component';
import { HeroComponent } from '../hero/hero.component';
import { HotCategoriesComponent } from '../hot-categories/hot-categories.component';
import { InstagramSectionComponent } from '../instagram-section/instagram-section.component';
import { SaleComponent } from '../sale/sale.component';
import { ShopCollectionComponent } from '../shop-collection/shop-collection.component';
import { TopProductsComponent } from '../top-products/top-products.component';
import { SubscribeComponent } from './../../common/components/subscribe/subscribe.component';
import { FooterSliderComponent } from './../../common/components/footer-slider/footer-slider.component';
import { FooterComponent } from './../../common/components/footer/footer.component';
import { NavTertiaryComponent } from './../../components/nav-tertiary/nav-tertiary.component';

@Component({
  selector: 'app-main-index-2',
  standalone: true,
  imports: [
    NavTertiaryComponent,
    HeroComponent,
    BusinessInformationComponent,
    ShopCollectionComponent,
    HotCategoriesComponent,
    TopProductsComponent,
    SaleComponent,
    InstagramSectionComponent,
    FeedbackSectionComponent,
    CtaComponent,
    BlogsComponent,
    SubscribeComponent,
    FooterSliderComponent,
    FooterComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {}
