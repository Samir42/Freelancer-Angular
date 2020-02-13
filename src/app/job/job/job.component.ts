import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
})
export class JobComponent implements OnInit {
  jobId: number;
  job: Job;
  freelancerId:number;

  constructor(private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router) { 
      
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jobId = params['id'] //log the value of id
    });

    this.jobService.getJob(this.jobId).subscribe(x => {this.job = x;this.freelancerId=x.freelancerId});
  }
}
