import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobService } from 'src/app/services/job.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
})
export class ProposalsComponent implements OnInit {

  constructor(private jobService: JobService,
    private requestService:RequestService) { }

  proposals: Request[];

  ngOnInit() {
    this.getProposals(this.jobId);
  }


  getProposals(id: number) {
    return this.requestService.getProposals(id)
      .subscribe(res => {
        this.proposals = res;
      });
  }

  @Input()
  jobId: number;
}
