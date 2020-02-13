import { Component, OnInit, Input } from '@angular/core';
import { FirsterrorPipe } from 'src/app/pipes/firsterror.pipe';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-createrequest',
  templateUrl: './createrequest.component.html',
  styleUrls: ['./createrequest.component.css'],
})
export class CreaterequestComponent implements OnInit {


  constructor(private jobService: JobService) { }

  ngOnInit() {
  }

  show(x) {
    console.log(x);
  }

  clicked() {
    console.log(this.offered, this.hmd, this.desc, this.freelancerId, this.jobId)
  }

  offered: string;
  hmd: number;
  desc: string;
  freelancerId: number;
  @Input()
  jobId: number;

}
