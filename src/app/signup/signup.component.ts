import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';
import { SkillService } from '../services/skill.service';
import { Skill } from '../shared/models/skill';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  // user: User;
  clicked: boolean;
  skills: Skill[];
  selectedSkills: Skill[];
  email:string;
  password:string;

  get selected(): boolean {
    if(this.selectedSkills && this.selectedSkills.length)
      return true;
    else
      return false;
  }

  constructor(private accountService: AccountService,
    private skillService: SkillService) { }

  ngOnInit() {
    this.getSkills().subscribe(x => this.skills = x);
  }

  hasNext: boolean;


  getSkills() {
    return this.skillService.getSkills();
  }

  onClick() {
    // if (!this.clicked || this.hasNext) {
    //   // this.clicked = true;
    //   // this.hasNext = false;
    //   // console.log('clicked')
    //   // const user : User ={email:this.email,password:this.password} as User;

    //   // this.accountService.signUp(user);
      
    // }
    // else
    //   this.clicked = false;

    // console.log('called')
    // console.log(this.selectedSkills);
  }

  register() {

    // const user: User = { email, password } as User;

    // this.userService.postUser(user).subscribe(
    //   res=> {
    //     console.log(res);
    //   },
    //   err=>{
    //     console.log(err);
    //   }
    // );
  }


  resetForm(form?: NgForm) {
    // form.resetForm();
    // this.userService.user = {
    //   email:'',
    //   password:''
    // }
  }
}
