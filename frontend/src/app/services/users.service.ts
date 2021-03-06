import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  students = [
    {username: "",password: ""}
  ]

  studentshistory = [
    {username: "",score: "",date: ""}
  ]

  constructor(private httpclient: HttpClient) { }

  getcomments(): Observable<any>{
     return this.httpclient.get("http://localhost:3000/");
  }

  public getstudents(): Array<{username,password}>{
    return this.students;}

    public createstudent(students: {username,password}){
      this.students.push(students);
    }

    public getstudentshistory(): Array<{username,score,date}>{
      return this.studentshistory;}
  
      public createstudentshistory(studentshistory: {username,score,date}){
        this.studentshistory.push(studentshistory);
      }
  }
