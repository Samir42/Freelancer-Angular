import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Job } from '../shared/models/job';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobUrl = "http://localhost:5000/api/Job";
  userUrl = "http://localhost:5000/api/User";

  constructor(private httpClient: HttpClient) {
  }

  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.jobUrl);
  }

  getmyJobs(): Observable<Job[]> {


    return this.httpClient.get<Job[]>(this.userUrl + '/' + 'jobs', { headers: this.getToken() });
  }

  getJob(id: number | string): Observable<Job> {
    return this.httpClient.get<Job>(this.jobUrl + '/' + id);
  }

  postJob(job: Job): Observable<Job> {
    return this.httpClient.post<Job>(this.jobUrl, job, { headers: this.getToken() });
  }

  getToken() {
    return new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
  }


  updateJob(job: Job) {
    return this.httpClient.post(this.jobUrl + '/update', job, { headers: this.getToken() })
  }

  getDoneProjects(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.jobUrl + '/done', { headers: this.getToken() })
  }
}
