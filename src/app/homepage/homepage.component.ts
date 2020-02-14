import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
})
export class HomepageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    // if (!localStorage.getItem('token')) {
    //   this.route.navigate(['/login']);
    console.log(localStorage.getItem('token'));
    }
}
