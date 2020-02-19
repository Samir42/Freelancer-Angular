import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';
import { SkillService } from '../services/skill.service';
import { Skill } from '../shared/models/skill';
import { AccountService } from '../services/account.service';
import { FreelancerService } from '../services/freelancer.service';
import { Freelancer } from '../shared/models/freelancer';
import { SkillUser } from '../shared/models/skillsUsers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  skillsUsers: SkillUser[] = [];
  clicked: boolean = false;
  hasNext: boolean = true;
  skills: Skill[];
  selectedSkills: Skill[];
  email: string;
  password: string;
  hourly: number;
  name: string;
  surname: string;
  companyName: string;

  get selected(): boolean {
    return this.selectedSkills && this.selectedSkills.length ? true : false;
  }

  constructor(private accountService: AccountService,
    private freelancerService: FreelancerService,
    private skillService: SkillService,
    private route: Router) { }

  ngOnInit() {
    this.getSkills().subscribe(x => this.skills = x);
  }

  getSkills() {
    return this.skillService.getSkills();
  }


  onClick() {
    if (!this.clicked) {
      this.clicked = true;
      this.hasNext = false;

      const user: User = { email: this.email, password: this.password, name: this.name, surname: this.surname, id: 0 } as User;

      this.accountService.signUp(user);

    }
    else {
      this.fillSkills();

      const freelancer: Freelancer = {
        id: 0, userId: 0, payHourly: this.hourly,
        skillUsers: this.skillsUsers, password: this.password,companyName:this.companyName
      } as Freelancer;

      this.freelancerService.post(freelancer);
      
      console.log(freelancer)

      // this.route.navigate(["/jobs"])
    }
  }

  fillSkills() {
    this.selectedSkills.forEach(skill => {
      const su: SkillUser = { skill: skill, skillId: 0, id: 0, freelancerId: 0 } as SkillUser;
      this.skillsUsers.push(su);
    });
  }
}
