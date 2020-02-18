import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';
import { Freelancer } from '../shared/models/freelancer';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  usersUrl = 'http://localhost:5000/api/User';
  freelancersUrl = 'http://localhost:5000/api/Freelancers';

  constructor(private httpClient: HttpClient) { }


  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.usersUrl + '/Freelancer');
  }

  post(freelancer: Freelancer) {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });

    return this.httpClient.post(this.freelancersUrl, freelancer, { headers: tokenHeader }).subscribe(
      (res: any) => {
        console.log('new token generated', res.token);
        localStorage.setItem('token', res.token);
      }
    );
  }
}
