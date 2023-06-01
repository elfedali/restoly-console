import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuCollapsed = true;
  currentUser: any;

  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.user.getLoggedInUser();
  }
}
