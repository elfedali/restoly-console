import { AuthService } from 'src/app/_services/auth.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: ``,
})
export class LogoutComponent {
  constructor(private auth: AuthService, private router: Router) {
    this.auth.logout();
    this.router.navigate(['/security/login']);
  }
}
