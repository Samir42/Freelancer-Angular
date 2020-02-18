import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';
import { SkillService } from '../services/skill.service';
import { Skill } from '../shared/models/skill';
import { AccountService } from '../services/account.service';
import { FreelancerService } from '../services/freelancer.service';
import { Freelancer } from '../shared/models/freelancer';
import { SkillsUsers } from '../shared/models/skillsUsers';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {
  skillsUsers: SkillsUsers[] = [];
  clicked: boolean = false;
  hasNext: boolean = true;
  skills: Skill[];
  selectedSkills: Skill[];
  email: string;
  password: string;
  hourly: number;

  get selected(): boolean {
    if (this.selectedSkills && this.selectedSkills.length)
      return true;
    else
      return false;
  }

  constructor(private accountService: AccountService,
    private freelancerService: FreelancerService,
    private skillService: SkillService) { }

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

      const user: User = { email: this.email, password: this.password, id: 0 } as User;

      this.accountService.signUp(user);

    }
    else {
      console.log('clickeeeeed')


      this.fillSkills();

      const freelancer: Freelancer = {
        id: 0, userId: 0, payHourly: this.hourly,
        skillsUsers: this.skillsUsers
      } as Freelancer;

      console.log(freelancer);
      this.freelancerService.post(freelancer);
    }
  }

  fillSkills() {
    this.selectedSkills.forEach(skill => {
      const su: SkillsUsers = { skill: skill } as SkillsUsers;
      this.skillsUsers.push(su);
    });
  }
}
