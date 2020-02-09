import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-jobdetails',
  templateUrl: './jobdetails.component.html',
})
export class JobdetailsComponent implements OnInit {
  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.jobService.getJob(1).subscribe(x => this.jobTitle = x.title);
  }

  jobTitle: string;

}
