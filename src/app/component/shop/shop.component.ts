import { Component, OnInit } from '@angular/core';
import { Shop } from '../../model/shop';
import { ShopService } from '../../service/shop.service';

@Component({
  selector: 'shop-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let shop of shops">
        {{shop.id}} :{{shop.name}} 
    </li>
  </ul>
  `
})

export class ShopListComponent implements OnInit {
  shops: Shop[] = [];
  error = '';

  constructor(private _shopService: ShopService) { }

  ngOnInit() {
    this._shopService.getShops().subscribe(
      result => {
        if (result) {
          this.shops = result;
        }
      },
      err => {
        console.log(err);
        this.error = 'Username or password is incorrect';
      });
  };
}
