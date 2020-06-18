import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { score } from './score';
import { history } from './history';
import { answer } from './answer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class EmployeeService {

  private _url: string = 'http://localhost:3000/';
  private _url2: string = 'http://localhost:3000/score';
  private _url3: string = 'http://localhost:3000/history';
  private _url4: string = 'http://localhost:3000/answerkey';

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .catch(this.errorHandler);
  }
  getscore(): Observable<score[]>{
    return this.http.get<score[]>(this._url2)
                    .catch(this.errorHandler);
  }
  gethistory(): Observable<history[]>{
    return this.http.get<history[]>(this._url3)
                    .catch(this.errorHandler);
  }
  getanswer(): Observable<answer[]>{
    return this.http.get<answer[]>(this._url4)
                    .catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}