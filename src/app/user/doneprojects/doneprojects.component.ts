import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-doneprojects',
  templateUrl: './doneprojects.component.html'
})
export class DoneprojectsComponent implements OnInit {

  jobs:Job[]
  constructor(private jobService:JobService) { }

  ngOnInit() {
    this.getDoneProjects();
  }

  getDoneProjects(){
    this.jobService.getDoneProjects().subscribe(res => { this.jobs = res; console.log(this.jobs); })
  }

}
