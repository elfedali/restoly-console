import { Component } from '@angular/core';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styles: [
    `
      .bg-cover {
        background-position: bottom right;
        background-size: 90%;
        background-repeat: no-repeat;
      }
    `,
  ],
})
export class SecurityComponent {
  imgBkg: string = 'assets/images/auth/login.svg';
}
