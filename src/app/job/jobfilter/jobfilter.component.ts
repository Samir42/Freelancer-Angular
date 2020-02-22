import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobfilter',
  templateUrl: './jobfilter.component.html',
})
export class JobfilterComponent implements OnInit {

  get hasToken():boolean{
    return localStorage.getItem('token') ? true : false;
  }
  rate:number=2;
  constructor() { }

  ngOnInit() {
  }

}
