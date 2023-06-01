import { Component, OnInit } from '@angular/core';
import { ShopsService } from './../../../_services/shops.service';
import { ActivatedRoute } from '@angular/router';
import { IShop } from 'src/app/models';

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
