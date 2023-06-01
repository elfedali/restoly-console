import { Component, OnInit } from '@angular/core';
import { ShopsService } from './../../_services/shops.service';
import { IPaginationMeta, IShop, IUser } from 'src/app/models';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopsComponent implements OnInit {
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
    this.shopsService.getShops(this.pagination, this.includes).subscribe({
      next: (res) => {
        console.log(res);
        this.shops = res.data;
        this.pagination = res.meta.page;
        this.included = res.included;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  nextPage() {
    if (this.pagination.currentPage >= this.pagination.lastPage) return;
    this.pagination.currentPage++;
    this.shopsService.getShops(this.pagination, this.includes).subscribe({
      next: (res) => {
        console.log(res);
        this.shops = res.data;
        this.pagination = res.meta.page;
        this.included = res.included;
      },
    });
  }
  previousPage() {
    if (this.pagination.currentPage <= 1) return;
    this.pagination.currentPage--;
    this.shopsService.getShops(this.pagination, this.includes).subscribe({
      next: (res) => {
        console.log(res);
        this.shops = res.data;
        this.pagination = res.meta.page;
        this.included = res.included;
      },
    });
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
}
