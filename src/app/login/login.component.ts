import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService,
    private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null) {
      // this.router.navigate(['/homepage']);
    }
  }

  onSubmit(email: string, password: string) {
    const user: User = { email, password } as User;
    this.accountService.login(user);
  }
}
