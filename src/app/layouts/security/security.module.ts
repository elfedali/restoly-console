import { LoginComponent } from 'src/app/modules/auth/login/login.component';
import { LogoutComponent } from 'src/app/modules/auth/logout/logout.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SecurityComponent } from './security.component';

@NgModule({
  declarations: [SecurityComponent, LoginComponent, LogoutComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
})
export class SecurityModule {}
