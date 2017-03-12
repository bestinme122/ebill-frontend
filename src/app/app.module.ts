import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions } from '@angular/http';
import { AuthRequest } from './app.authRequest';

//Component
import { AppComponent } from './app.component';
import { ShopListComponent } from './component/shop/shop.component';
import { LoginComponent } from './component/login/login.component';


import { routes }        from './app.route';
import {AuthenticationService} from "./service/auth.service";
import {RouterModule} from "@angular/router";
// import {LocationStrategy, HashLocationStrategy} from "@angular/common";

//Service

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthenticationService,
    {provide: RequestOptions, useClass: AuthRequest},
    // {provide : LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
