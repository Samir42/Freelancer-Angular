import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {

  constructor(private route: Router) {
    if (localStorage.getItem('token'))
      route.navigate(['/jobs'])
  }

  ngOnInit() {
  }
}
