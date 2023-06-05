import { UserService } from 'src/app/_services/user.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  currentUser: any;

  constructor(private user: UserService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser = this.user.getUser();
  }

  logout() {
    this.router.navigate(['/security/logout']);
  }
}
