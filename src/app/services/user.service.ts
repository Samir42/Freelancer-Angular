import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  fruits: string[] = ['Apple', 'Orange', 'Banana'];

  constructor(private httpClient:HttpClient) { }



}
