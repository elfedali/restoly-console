import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { PostsComponent } from './modules/posts/posts.component';
import { SecurityComponent } from './layouts/security/security.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { ServerErrorComponent } from './modules/server-error/server-error.component';
import { AccessDeniedComponent } from './modules/access-denied/access-denied.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { HomeComponent } from './modules/home/home.component';
import { LogoutComponent } from './modules/logout/logout.component';
import { ShopsComponent } from './modules/shops/shops.component';
import { ShopDetailsComponent } from './modules/shops/shop-details/shop-details.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: 'shops',
        component: ShopsComponent,
      },
      {
        path: 'shops/:id',
        component: ShopDetailsComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
        
      },
    ],
  },
  {
    path: 'auth',
    component: SecurityComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },

      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
      },
      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
  {
    path: 'server-error',
    component: ServerErrorComponent,
  },
  {
    path: 'access-denied',
    component: AccessDeniedComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
