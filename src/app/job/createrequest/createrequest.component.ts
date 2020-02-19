import { Component, OnInit, Input } from '@angular/core';
import { FirsterrorPipe } from 'src/app/pipes/firsterror.pipe';
import { JobService } from 'src/app/services/job.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-createrequest',
  templateUrl: './createrequest.component.html',
  styleUrls: ['./createrequest.component.css'],
})
export class CreaterequestComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.requestService.hasRequest(this.jobId).subscribe(res => {
      this.hasRequest = res;
    });
  }

  show(x) {
    console.log(x);
  }

  @Input()
  jobId: number;
  hasRequest;


  onApply(requestDescription: string, howManyDay: number, offer: number) {

    const request: Request = { requestDescription, howManyDay, offer, jobId: this.jobId } as unknown as Request;
    return this.requestService.postRequest(request).subscribe(err => console.log(err));
  }
}
