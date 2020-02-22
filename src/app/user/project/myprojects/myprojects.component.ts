import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/shared/models/job';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'myprojects',
  templateUrl: './myprojects.component.html'
})
export class MyprojectsComponent implements OnInit {
  ngOnInit() {
    console.log(this.jobs)
  }

  @Input()
  jobs: Job[];
}
