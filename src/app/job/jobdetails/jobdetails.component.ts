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
    console.log(this.req)
  }

//    const req:Request = {
//     id:1,
//     jobId:1,
//     freelancerId:1,
//     requestDescription: 'babatDescription',
//     howManyDay: 3,
//     freelancer:null
// } as Request

 req : Request = {
id: 1, jobId: 1, freelancerId: 1, requestDescription: 'asdasda',
  howManyDay: 3, freelancer: null
} as unknown  as Request;

  jobId: number;
  
  @Input()
  job:Job;

  log(x){
    console.log(x);
  }
}
