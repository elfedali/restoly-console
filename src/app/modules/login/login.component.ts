import { UserService } from './../../_services/user.service';
import { TokenService } from './../../_services/token.service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;
  user: any = {};

  alreadyLoggedIn = false;

  public backgroundImage = 'https://images.pexels.com/photos/4081003/pexels-photo-4081003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  constructor(
    private auth: AuthService,
    private token: TokenService,
    private router: Router,
    private userService: UserService

  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('hello@mail.com', Validators.required),
      password: new FormControl('password', [Validators.required])
    });
    if (this.token.getAccessToken()) {
      this.alreadyLoggedIn = true;
      this.user = this.userService.getLoggedInUser();

    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.loading = true;

    this.auth.login(this.form.value.email, this.form.value.password)
      .subscribe(
        data => {
          console.log(data);
          this.token.setAccessToken(data.access_token); // save token in local storage
          this.userService.setLoggedInUser(data.user); // save user in local storage
          this.loading = false;
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
          this.loading = false;
        }
      );

  }
}
