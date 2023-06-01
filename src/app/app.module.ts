import { httpInterceptorProviders } from './_helpers/jwt.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { HomeComponent } from './modules/home/home.component';
import { AccessDeniedComponent } from './modules/access-denied/access-denied.component';
import { ServerErrorComponent } from './modules/server-error/server-error.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DefaultModule } from './layouts/default/default.module';
import { SecurityModule } from './layouts/security/security.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './modules/logout/logout.component';
import { ShopsComponent } from './modules/shops/shops.component';
import { ShopDetailsComponent } from './modules/shops/shop-details/shop-details.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AccessDeniedComponent,
    ServerErrorComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    PostsComponent,
    LogoutComponent,
    ShopsComponent,
    ShopDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    SecurityModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
