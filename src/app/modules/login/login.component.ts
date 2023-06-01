import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from './../../_services/token.service';
import { UserService } from './../../_services/user.service';
import { IUser } from 'src/app/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  user: any = null;
  alreadyLoggedIn = false;
  public backgroundImage =
    'https://images.pexels.com/photos/4081003/pexels-photo-4081003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
    this.checkIfUserIsLoggedIn();
  }

  initLoginForm(): void {
    this.form = new FormGroup({
      email: new FormControl('0627018957', Validators.required),
      password: new FormControl('password', [Validators.required]),
    });
  }

  checkIfUserIsLoggedIn(): void {
    if (this.token.getAccessToken()) {
      this.alreadyLoggedIn = true;
      this.user = this.userService.getLoggedInUser();
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.auth.login(this.form.value.email, this.form.value.password).subscribe({
      next: (res) => this.handleLoginSuccess(res),
      error: (error) => this.handleLoginError(error),
    });
  }

  handleLoginSuccess(res: any): void {
    this.token.setAccessToken(res.access_token);
    this.userService.setLoggedInUser(res.data);
    this.loading = false;
    this.router.navigate(['/']);
  }

  handleLoginError(error: any): void {
    console.error(error);
    this.loading = false;
  }
}
