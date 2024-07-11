import { Component } from '@angular/core';

const bussinessInfo = [
  {
    img: 'assets/img/icon-pickup.png',
    text1: 'Free Shipping',
    text2: 'Free Shipping over $100',
    order: 1
  },
  {
    img: 'assets/img/icon-payment.png',
    text1: 'Secure Payment',
    text2: '100% Secure Payment',
    order: 2
  },
  {
    img: 'assets/img/icon-headphone.png',
    text1: '24/7 Support',
    text2: 'Support 24 Hours a Day',
    order: 3
  }
];
@Component({
  selector: 'app-business-information',
  standalone: true,
  imports: [],
  templateUrl: './business-information.component.html',
  styleUrl: './business-information.component.scss'
})
export class BusinessInformationComponent {
  bussinessInfo = bussinessInfo;
}
