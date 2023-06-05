import { CategoryService } from 'src/app/_services';
import { IPaginationMeta } from 'src/app/models';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  isLoading = false;
  pagination: IPaginationMeta = {
    currentPage: 1,
    perPage: 10,
  } as IPaginationMeta;

  includes = 'owner,images';
  included: any;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): void {
    this.categoryService.getCateories(this.pagination).subscribe({
      next: (res) => {
        this.handlefetchSuccess(res);
      },
      error: (error) => {},
    });
  }

  handlefetchSuccess(res: any) {
    this.categories = res.data;
    this.pagination = res.meta.page;
  }
  pageChanged($event: number) {
    console.log($event);

    this.pagination.currentPage = $event;
    this.fetchCategories();
  }
}
