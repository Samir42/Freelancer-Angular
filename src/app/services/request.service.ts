import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) { }
  requestUrl = "http://localhost:5000/api/Proposals";

  postRequest(request: Request) : Observable<Request> {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });

    return this.httpClient.post<Request>(this.requestUrl,request, { headers: tokenHeader });
  }


}
