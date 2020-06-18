import { Component, OnInit } from '@angular/core';
declare const fun:any;
declare const myfun:any;
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  xyz =  localStorage.getItem("initialscore");

  callfun(){
    myfun();
  }
  constructor() { }
  geturl()
  {
    return "url('assets/dotpen.jpg')";
  }
  getsize()
  {
    return "120%";
  }
  ngOnInit() {
  }

}
