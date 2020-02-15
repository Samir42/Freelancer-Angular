import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class AccountService {
  isLoggedIn: boolean = false;
  // store the URL so we can redirect after logging in
  redirectUrl: string = "/homepage";
  loginUrl = 'http://localhost:5000/api/Account/login';
  signupUrl= 'http://localhost:5000/api/Account/signup';


  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  login(user: User) {
    return this.http.post(this.loginUrl,user).subscribe(
      (res: any) => {
        this.isLoggedIn = true;
        if (this.redirectUrl) {
          localStorage.setItem('token', res.token);
          this.router.navigate([this.redirectUrl]);
          this.redirectUrl = null;
        }
      },
      err => {
        if (err.status == 400) {
          console.log(err)
        }
      }
    );
  }

  signUp(user: User) {
    return this.http.post(this.signupUrl, user).subscribe(err => console.log(err));
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}