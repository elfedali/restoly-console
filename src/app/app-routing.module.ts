import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guard/auth.guard';
import { DefaultComponent } from './layouts/default/default.component';
import { SecurityComponent } from './layouts/security/security.component';
import { AccessDeniedComponent } from './modules/access-denied/access-denied.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { LogoutComponent } from './modules/auth/logout/logout.component';
import { CategoryDetailsComponent } from './modules/category/category-details/category-details.component';
import { CategoryComponent } from './modules/category/category.component';
import { ForgotPasswordComponent } from './modules/forgot-password/forgot-password.component';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ServerErrorComponent } from './modules/server-error/server-error.component';
import { ShopDetailsComponent } from './modules/shops/shop-details/shop-details.component';
import { ShopsComponent } from './modules/shops/shops.component';
import { UsersComponent } from './modules/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
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
        path: 'categories',
        component: CategoryComponent,
      },
      {
        path: 'categories/:id',
        component: CategoryDetailsComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
  {
    path: 'security',
    component: SecurityComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
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
