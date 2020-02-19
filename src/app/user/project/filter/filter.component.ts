import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  jobs:Job[];
  constructor(private jobService:JobService) { }


  ngOnInit() {
    this.getJobs();
  }

  getJobs(){
    this.jobService.getmyJobs().subscribe(res => { this.jobs = res; console.log(this.jobs); })
  }

}
