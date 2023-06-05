import { UserService } from 'src/app/_services';
import { IPaginationMeta } from 'src/app/models';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  isLoading = false;
  pagination: IPaginationMeta = {
    currentPage: 1,
    perPage: 10,
  } as IPaginationMeta;

  includes = 'owner,images';
  included: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getCateories(this.pagination).subscribe({
      next: (res) => {
        this.handlefetchSuccess(res);
      },
      error: (error) => {},
    });
  }

  handlefetchSuccess(res: any) {
    this.users = res.data;
    this.pagination = res.meta.page;
  }
  pageChanged($event: number) {
    this.pagination.currentPage = $event;
    this.fetchUsers();
  }
}
