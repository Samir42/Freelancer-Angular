import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../shared/models/user';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {
  userUrl = 'http://localhost:5000/api';
  user:User;

  constructor(private http: HttpClient) { }

  postUser(user:User) {
    console.log(user);

    return this.http.post<User>(this.userUrl+'/Account',user);
  }
}
