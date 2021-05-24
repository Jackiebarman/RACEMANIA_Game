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
  race_score=localStorage.getItem("racecoin");
  play=false;



  callfun(){
    if(confirm("Are you sure to logout?"))
  {
  window.location.href = '/login';
  myfun();
  }
  else{
     
  }
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
    let xx=this.xyz;
    console.log("Score_XX:",xx);
    if (parseInt(xx, 10) > parseInt('4', 10)) 
    {
        this.play=true;
    } 
    else
    {
        this.play=false;
    }
    console.log(this.play);
    console.log(this.race_score);
  }

}
