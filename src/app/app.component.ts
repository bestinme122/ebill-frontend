import { Component } from '@angular/core';
import { ShopService } from './service/shop.service';
import { AuthenticationService } from './service/auth.service';
import {AuthRequest} from "./app.authRequest";

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
  <h1>  {{title}} </h1>
  <div class="outer-outlet">
    <router-outlet>
    </router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.less'],
  providers: [ShopService, AuthenticationService, AuthRequest]
})
export class AppComponent {
  title = 'This is E-Bill system. Order billing automatically!';
}
