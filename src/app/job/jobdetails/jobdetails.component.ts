import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';
import { JobsSkills } from 'src/app/shared/models/jobsSkills';
import { ActivatedRoute, Router } from '@angular/router';
import { Time } from '@angular/common';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
})
export class JobdetailsComponent implements OnInit {
  constructor(private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jobId = params['id'] //log the value of id
    });
  }

  jobId: number;
  
  @Input()
  job:Job;
}
