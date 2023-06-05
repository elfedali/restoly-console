import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { bearerInterceptorProviders } from './_helpers/bearer.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { SecurityModule } from './layouts/security/security.module';
import { AccessDeniedComponent } from './modules/access-denied/access-denied.component';
import { CategoryDetailsComponent } from './modules/category/category-details/category-details.component';
import { CategoryComponent } from './modules/category/category.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { RegisterComponent } from './modules/register/register.component';
import { ServerErrorComponent } from './modules/server-error/server-error.component';
import { ShopDetailsComponent } from './modules/shops/shop-details/shop-details.component';
import { ShopsComponent } from './modules/shops/shops.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    AccessDeniedComponent,
    ServerErrorComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    ShopsComponent,
    ShopDetailsComponent,
    CategoryComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    SecurityModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [bearerInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
