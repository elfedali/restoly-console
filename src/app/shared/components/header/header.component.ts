import { AuthService } from 'src/app/_services';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  currentUser: any;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser = this.auth.getUser();
  }

  logout() {
    this.router.navigate(['/security/logout']);
  }
}
