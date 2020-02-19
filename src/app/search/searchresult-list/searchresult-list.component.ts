import { Component, OnInit, Input } from '@angular/core';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { User } from 'src/app/shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchresult-list',
  templateUrl: './searchresult-list.component.html',
})
export class SearchresultListComponent implements OnInit {
  users: User[] = [];
  copyUsers: User[];

  constructor(private freelancerService: FreelancerService) { }

  ngOnInit() {
    this.getFreelancers();
  }
  getFreelancers() {
    this.freelancerService.getUsers().subscribe(freelancers => this.users = freelancers);
  }


  showSkill() {
    this.users.forEach(user => {
      user.freelancer.skillUsers.forEach(skilluser => {
        console.log(skilluser.skill);
      })
    });
  }

  @Input()
  set rate(rate: number) {
    console.log(rate);
    this.updateFreelancers(rate);
    console.log(this.users);
    // this.users = Object.assign({}, this.updateFreelancers(rate));
  }

  updateFreelancers(rate: number) {
    this.users = this.users.filter(x => x.freelancer.payHourly >= rate);
  }
}
