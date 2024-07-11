import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-categories-index-3',
  standalone: true,
  imports: [RouterLink, NgbCarouselModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  slides = [
    {
      key: 101,
      imgs: [
        {
          img: 'assets/img/icon-category-1.png',
          type: 'Cloth',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-2.png',
          type: 'Shoes',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-3.png',
          type: 'Jewelery',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-4.png',
          type: 'Sunglass',
          items: '512 Items'
        }
      ]
    },
    {
      imgs: [
        {
          img: 'assets/img/icon-category-2.png',
          type: 'Shoes',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-3.png',
          type: 'Jewelery',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-4.png',
          type: 'Sunglass',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-5.png',
          type: 'Perfume',
          items: '512 Items'
        }
      ]
    },
    {
      imgs: [
        {
          img: 'assets/img/icon-category-3.png',
          type: 'Jewelery',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-4.png',
          type: 'Sunglass',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-5.png',
          type: 'Perfume',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-6.png',
          type: 'Skin Care',
          items: '512 Items'
        }
      ]
    },
    {
      imgs: [
        {
          img: 'assets/img/icon-category-4.png',
          type: 'Sunglass',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-5.png',
          type: 'Perfume',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-6.png',
          type: 'Skin Care',
          items: '512 Items'
        },
        {
          img: 'assets/img/icon-category-1.png',
          type: 'Cloth',
          items: '512 Items'
        }
      ]
    }
  ];
}
