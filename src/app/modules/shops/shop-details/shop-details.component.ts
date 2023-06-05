import { IShop } from 'src/app/models';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ShopsService } from '../../../_services/shop.service';

@Component({
  selector: 'app-shop-details',
  templateUrl: './shop-details.component.html',
  styleUrls: ['./shop-details.component.scss'],
})
export class ShopDetailsComponent implements OnInit {
  shop: IShop = {} as IShop;
  shopId: any;
  isLoaded = false;

  constructor(
    private shopsService: ShopsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.shopId = this.route.snapshot.paramMap.get('id');
    this.shopsService.getShop(this.shopId).subscribe((res) => {
      console.log(res);
      this.shop = res.data;
      this.isLoaded = true;
    });
  }
}
