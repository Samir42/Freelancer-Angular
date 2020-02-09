import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  fruits: string[] = ['Apple', 'Orange', 'Banana'];

  constructor() { }
}
