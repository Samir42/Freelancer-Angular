import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
})
export class ProposalsComponent implements OnInit {

  constructor(private jobService: JobService) { }

  proposals: Request[];

  ngOnInit() {
    this.getProposals(this.jobId);
  }


  getProposals(id: number) {
    return this.jobService.getProposals(id)
      .subscribe(res => {
      this.proposals = res;
        console.log(this.proposals)
      });
  }

  @Input()
  jobId: number;
}
