import { LoginComponent } from './component/login/login.component';
import { Routes } from '@angular/router';
import {ShopListComponent} from "./component/shop/shop.component";
// import { AuthGuard } from './_guards/index';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopListComponent },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }

];
