import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Component
import { AppComponent } from './app.component';
import { ShopListComponent } from './shop.component';
import { LoginComponent } from './component/login/login.component';


import { routing }        from './app.route';

//Service
import { ShopService } from './service/shop.service';

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
    routing
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
