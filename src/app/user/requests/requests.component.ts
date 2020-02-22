import { Component, OnInit } from '@angular/core';
import { JobsSkills } from 'src/app/shared/models/jobsSkills';
import { JobService } from 'src/app/services/job.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'myrequests',
  templateUrl: './requests.component.html'
})
export class RequestsComponent implements OnInit {

  requests: Request[];
  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getmyProposals();
  }


  getmyProposals() {
    return this.requestService.getmyProposals().subscribe(res => { this.requests = res; console.log(res) });
  }
}
