import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:8081/sms/api/v1/students';

  getStudentList() : Observable<Student[]> {
    return this.http.get<Student[]>(this.url);
  }

  deleteStudent(sid: number): Observable<string> {
    //http://localhost:8081/sms/api/v1/students/101
    return this.http.delete(this.url.concat('/').concat(sid+''), {responseType: 'text'});
  }

  addStudent(studentData: Student): Observable<string> {
    return this.http.post(this.url, studentData, {responseType: 'text'});
  }

  getStudentById(sid: string): Observable<Student> {
    return this.http.get<Student>(this.url.concat('/'+sid));
  }

  updateStudent(sid: string, studentData: Student): Observable<string> {
    console.log(studentData);
    return this.http.put(this.url.concat('/'+sid), studentData, {responseType: 'text'});
  }
}
