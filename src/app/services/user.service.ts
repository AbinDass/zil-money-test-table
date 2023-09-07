import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userInterface } from '../model/userInterface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = `https://zil-test.s3.us-east-1.amazonaws.com/json-data.json`;
  constructor(private http: HttpClient) {}

  getUsedata(): Observable<userInterface[]> {
    return this.http.get<userInterface[]>(this.baseUrl);
  }
}
