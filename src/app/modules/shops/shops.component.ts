import { IPaginationMeta, IShop, IUser } from 'src/app/models';

import { Component, OnInit } from '@angular/core';

import { ShopsService } from '../../_services/shop.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
})
export class ShopsComponent implements OnInit {
  searchTerm: any;

  shops: IShop[] = [];
  pagination: IPaginationMeta = {
    currentPage: 1,
    perPage: 10,
  } as IPaginationMeta;

  includes = 'owner,images';
  included: any;

  constructor(private shopsService: ShopsService) {}

  ngOnInit(): void {
    this.fetchShops();
  }

  fetchShops(): void {
    this.shopsService
      .getShops(this.pagination, this.includes, this.searchTerm)
      .subscribe({
        next: (res) => {
          this.handlefetchSuccess(res);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  pageChanged($event: number) {
    this.pagination.currentPage = $event;
    this.fetchShops();
  }
  getOwner(shop: IShop) {
    if (shop.relationships.owner.data) {
      const owner: IUser = this.included.find(
        (item: any) => item.id === shop.relationships.owner.data.id
      );
      return owner.attributes.firstName + ' ' + owner.attributes.lastName;
    }
    return 'No Owner';
  }

  search() {
    this.shopsService
      .getShops(this.pagination, this.includes, this.searchTerm)
      .subscribe({
        next: (res) => {
          this.handlefetchSuccess(res);
        },
      });
  }

  handlefetchSuccess(res: any) {
    this.shops = res.data;
    this.pagination = res.meta.page;
    this.included = res.included;
  }
}
