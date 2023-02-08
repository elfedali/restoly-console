import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SecurityModule { }
