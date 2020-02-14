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
  }

  show(x) {
    console.log(x);
  }

  @Input()
  jobId: number;


  onApply(requestDescription: string, howManyDay: number, offer: number) {

    const request: Request = { requestDescription, howManyDay, offer,jobId:this.jobId} as unknown as Request;
    console.log(request);
    console.log(localStorage.getItem('token'));
    return this.requestService.postRequest(request).subscribe(err => console.log(err));
  }
}
