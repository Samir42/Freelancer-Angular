import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../shared/models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httpClient: HttpClient) { }
  skillUrl = "http://localhost:5000/api/Skill";

  getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillUrl);
  }
}
