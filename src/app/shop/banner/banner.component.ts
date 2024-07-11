import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { Shop_Banner_Img } from './../../constants/shop';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  bannerImg = Shop_Banner_Img;
}
