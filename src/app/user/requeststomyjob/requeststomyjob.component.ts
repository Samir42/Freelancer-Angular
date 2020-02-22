import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'requeststomyjob',
  templateUrl: './requeststomyjob.component.html'
})
export class RequeststomyjobComponent implements OnInit {

  jobId: number;
  requests: Request[];
  job: Job;

  constructor(private route: ActivatedRoute,
    private requestService: RequestService,
    private jobService: JobService,
    private router:Router) { }

  ngOnInit() {
    this.getId();
    this.jobService.getJob(this.jobId).subscribe(res => this.job = res);
  }

  getId() {
    this.route.params.subscribe(params => {
      this.jobId = params['id'] //log the value of id
    });

    this.getmyProposals();
  }

  getmyProposals() {
    return this.requestService.getProposals(this.jobId).subscribe(res => { this.requests = res; console.log(res) });
  }

  onAccept(freelancerId: number) {
    this.job.freelancerId = freelancerId;

    this.jobService.updateJob(this.job).subscribe(res => console.log(res));

    this.router.navigate(['/me/jobs']);
  }

}
