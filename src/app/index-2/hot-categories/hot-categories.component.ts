import { CategoryService } from './../../common/services/category.service';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-categories',
  standalone: true,
  imports: [],
  templateUrl: './hot-categories.component.html',
  styleUrl: './hot-categories.component.scss'
})
export class HotCategoriesComponent implements OnInit {
  categoryService = inject(CategoryService);
  hotCategories = [];

  ngOnInit() {
    this.categoryService.getAllHotCategories().subscribe((categories: any) => {
      console.log('ca', categories)
      this.hotCategories = categories;
    });
  }
}
