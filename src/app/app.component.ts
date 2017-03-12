import { Component } from '@angular/core';
import { ShopService } from './service/shop.service';
import { AuthenticationService } from './service/auth.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>  {{title}} </h1>
  <shop-list></shop-list>
  <login-box></login-box>
  `,
  styleUrls: ['./app.component.less'],
  providers: [ShopService, AuthenticationService]
})
export class AppComponent {
  title = 'This is E-Bill system. Order billing automatically!';
}
