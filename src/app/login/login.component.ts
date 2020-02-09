import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private accountService : AccountService) { }

  ngOnInit() {
  }

  // onSubmit(email:string,password:string){
  //   const user : User  = {email,password} as User;
  //   console.log(user.email);
  //   this.accountService.login(user);
  // }


}
