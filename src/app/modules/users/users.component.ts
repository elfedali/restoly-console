import { UserService } from 'src/app/_services';
import { IPaginationMeta } from 'src/app/models';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  isLoading = false;
  pagination: IPaginationMeta = {
    currentPage: 1,
    perPage: 10,
  } as IPaginationMeta;

  // includes = 'owner,images';
  included: any;

  searchTerm: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService
      .getUsers(this.pagination, undefined, this.searchTerm)
      .subscribe({
        next: (res) => {
          this.handlefetchSuccess(res);
        },
        error: (error) => {},
      });
  }

  pageChanged($event: number) {
    this.pagination.currentPage = $event;
    this.fetchUsers();
  }

  search() {
    this.userService
      .getUsers(this.pagination, undefined, this.searchTerm)
      .subscribe({
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
}
