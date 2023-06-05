import { TagService } from 'src/app/_services';
import { IPaginationMeta } from 'src/app/models';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
})
export class TagsComponent implements OnInit {
  tags: any[] = [];
  isLoading = false;
  pagination: IPaginationMeta = {
    currentPage: 1,
    perPage: 10,
  } as IPaginationMeta;

  includes = 'owner,images';
  included: any;

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.fetchTags();
  }

  fetchTags(): void {
    this.tagService.getTags(this.pagination).subscribe({
      next: (res) => {
        this.handlefetchSuccess(res);
      },
      error: (error) => {},
    });
  }

  handlefetchSuccess(res: any) {
    this.tags = res.data;
    this.pagination = res.meta.page;
  }
  pageChanged($event: number) {
    this.pagination.currentPage = $event;
    this.fetchTags();
  }
}
