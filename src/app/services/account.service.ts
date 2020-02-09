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
  loginUrl = 'http://localhost:5000/api/Account/';


  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user:User) {
    
    return this.http.get(this.loginUrl+user.email).subscribe(
      res => {
        this.isLoggedIn = true;
        if (this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
          this.redirectUrl = null;
        }
      }
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}