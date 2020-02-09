import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobresult-list',
  templateUrl: './jobresult-list.component.html',
})
export class JobresultListComponent implements OnInit {


  jobs: Job[];
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.getJobs();
  }

  getJobs() {
    this.jobService.getJobs().subscribe(res => { this.jobs = res; console.log(this.jobs); })
  }


  @Input()
  set rate(rate: number) {
    console.log(rate);
    this.updateJobs(rate);
  }

  updateJobs(rate: number): Job[] {
    console.log(rate);
    if (!rate)
      return this.jobs.filter(x => x.freelancer.payHourly == 25);
  }
}
