import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseUrl='http://localhost:5000/api/User';

  constructor(private httpClient:HttpClient) { }


  getUsers(): Observable<User[]>{
    console.log("From ClientService")
    return this.httpClient.get<User[]>(this.baseUrl+'/Client');
  }
}