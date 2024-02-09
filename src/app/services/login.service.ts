import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8081/sms/api/v1/users';

  saveUser(user: User) : Observable<string> {
    return this.http.post(this.url, user, {responseType: 'text'});
  }
  
  checkValidUser(user: User): Observable<User> {
    return this.http.post<User>(this.url.concat('/login'), user);
  }
}
