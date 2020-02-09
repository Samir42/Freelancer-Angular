import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
})
export class JobComponent implements OnInit {

  job: Job;

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJob(1).subscribe(res => {this.job = res;console.log(this.job + "from job component")});
  }

  getJob(id: number) {
    return this.jobService.getJob(id);
  }

}
