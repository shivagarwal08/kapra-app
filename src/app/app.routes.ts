import { Routes } from '@angular/router';
import { MainComponent as BlogDetailsMainComponent } from './blog-details/main/main.component';
import { MainComponent as BlogMainComponent } from './blog/main/main.component';
import { MainComponent as CartMainComponent } from './cart/main/main.component';
import { MainComponent as CheckoutMainComponent } from './checkout/main/main.component';
import { BlogDetailsErrorComponent } from './components/blog-details-error/blog-details-error.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MainComponent as ContactMainComponent } from './contact/main/main.component';
import { MainComponent as ErrorMainComponent } from './error/main/main.component';
import { MainComponent as Index2MainComponent } from './index-2/main/main.component';
import { MainComponent as Index3MainComponent } from './index-3/main/main.component';
import { MainComponent as Index4MainComponent } from './index-4/main/main.component';
import { MainComponent as ProductDetailsMainComponent } from './product-details/main/main.component';
import { MainComponent as ShopMainComponent } from './shop/main/main.component';
import { MainComponent as WishlistMainComponent } from './wishlist/main/main.component';

export const routes: Routes = [
  { path: 'index-2', component: Index2MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'error', component: ErrorMainComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'cart', component: CartMainComponent },
  { path: 'index-3', component: Index3MainComponent },
  { path: 'index-4', component: Index4MainComponent },
  { path: 'shop', component: ShopMainComponent },
  { path: 'checkout', component: CheckoutMainComponent },
  { path: 'blog', component: BlogMainComponent },
  { path: 'blog-details', component: BlogDetailsMainComponent },
  { path: 'blog-details-error', component: BlogDetailsErrorComponent },
  { path: 'contact', component: ContactMainComponent },
  { path: 'product-details', component: ProductDetailsMainComponent },
  { path: 'wishlist', component: WishlistMainComponent },
  { path: '', redirectTo: 'index-2', pathMatch: 'full' }
];
