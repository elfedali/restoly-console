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
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    SecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
