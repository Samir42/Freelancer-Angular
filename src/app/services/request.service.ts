import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private httpClient: HttpClient) {}

  requestUrl = "http://localhost:5000/api/Proposals";
  userUrl = "http://localhost:5000/api/User";
  tokenHeader: any;

  postRequest(request: Request): Observable<Request> {
    return this.httpClient.post<Request>(this.requestUrl, request, { headers: this.getToken() });
  }

  hasRequest(jobId: number): Observable<boolean> {
    return this.httpClient.get<boolean>(this.requestUrl + '/' + jobId + "/exists", { headers: this.getToken() });
  }

  getmyProposals(): Observable<Request[]> {
    return this.httpClient.get<Request[]>(this.userUrl + '/proposals', { headers: this.getToken() });
  }

  getProposals(id: number | string): Observable<Request[]> {
    return this.httpClient.get<Request[]>(this.requestUrl + '/' + id);
  }

  getToken() :any {
    return new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
  }
}
