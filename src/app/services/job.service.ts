import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Job } from '../shared/models/job';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  jobsUrl = 'http://localhost:5000/api/Job';
  proposalUrl = "http://localhost:5000/api/Job";
  jobUrl = "http://localhost:5000/api/Job";

  constructor(private httpClient: HttpClient) {
  }

  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.jobsUrl);
  }

  getJob(id: number | string): Observable<Job> {
    return this.httpClient.get<Job>(this.jobUrl + '/' + id);
  }


  getProposals(id: number | string): Observable<Request[]> {
    return this.httpClient.get<Request[]>(this.proposalUrl + '/' + id + '/Requests');
  }
}
