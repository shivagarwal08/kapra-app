import { RouterLink } from '@angular/router';
import { Category } from './../../../models/category.model';
import { CategoryService } from './../../common/services/category.service';
import { Component, inject, OnInit } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hot-categories',
  standalone: true,
  imports: [RouterLink, NgbNavModule],
  templateUrl: './hot-categories.component.html',
  styleUrl: './hot-categories.component.scss'
})
export class HotCategoriesComponent implements OnInit {
  categoryService = inject(CategoryService);
  hotCategories:any = [];

  ngOnInit() {
    this.categoryService.getAllHotCategories().subscribe((categories: any) => {
      this.formatCategories(categories);
    });
  }

  formatCategories(categories: Category[]) {
    this.hotCategories = categories.map((category: Category) => {
      return {
        name: category.name,
        sub: category.sub
      };
    });
  }
}
