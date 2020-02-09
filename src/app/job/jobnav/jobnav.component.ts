import { Component, OnInit, Input } from '@angular/core';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobnav',
  templateUrl: './jobnav.component.html',
})
export class JobnavComponent implements OnInit {

  detailsIsActive:boolean = true;
  proposalIsActive:boolean=false;

  constructor(public jobService : JobService) { }

  ngOnInit() {
    this.jobService.getJob(1).subscribe(res => this.jobTitle = res.title);
  }

  openTab(){
    this.detailsIsActive = !this.detailsIsActive;
    this.proposalIsActive = !this.proposalIsActive;
  }

  jobTitle:string;


}
