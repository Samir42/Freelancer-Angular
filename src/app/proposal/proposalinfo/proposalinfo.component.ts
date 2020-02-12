import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proposalinfo',
  templateUrl: './proposalinfo.component.html',
})
export class ProposalinfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.jobId = params['id'] //log the value of id
    });
  }


  jobId:number;
}
