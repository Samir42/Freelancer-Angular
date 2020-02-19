import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { User } from '../shared/models/user';
import { Router } from '@angular/router';
import { SkillService } from '../services/skill.service';
import { Skill } from '../shared/models/skill';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService,
    private skillService: SkillService,
    private router: Router) { }
    
    ngOnInit() {
      if (localStorage.getItem('token') != null) {
    }

  }
  
  onSubmit(email: string, password: string) {
    const user: User = { email, password } as User;
    this.accountService.login(user);
  }
}
