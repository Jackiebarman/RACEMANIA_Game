// import { EnrollmentService } from './../enrollment.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { User2 } from '../user2';
import { User3 } from '../User3';
import { User4 } from '../User4';
@Component({
  selector: 'app-login3',
  templateUrl: './login3.component.html',
  styleUrls: ['./login3.component.css']
})
export class Login3Component implements OnInit {
 correct=0;
 students;
 stu;
 xyz =  localStorage.getItem("spanval");
 abc =  localStorage.getItem("initialscore");
 clicked=0
 student: {username,password} = {username:"", password:""};
 user = localStorage.getItem("username");
 pass = localStorage.getItem("password"); 
 date =  localStorage.getItem("date"); 
 response = JSON.parse(localStorage.getItem("my_answer"));
 public userModel=new User('','',this.user,'',+91,'',this.pass,'');
 public userModel2=new User2('','',this.user,'',+91,'',this.pass,'',parseInt(this.xyz)+parseInt(this.abc));
 public userModel3=new User3(this.user,this.pass,parseInt(this.xyz),this.date);
 public userModel4=new User4(this.user,1,parseInt(this.response[0]),parseInt(this.response[1]),parseInt(this.response[2]));
 exist=false;
  submitted=false;

  loading =true;
  buttonText;
  constructor(public _http:HttpClient,public router:Router,private homeservice:UsersService) { }
  geturl()
  {
    return "url('assets/bg2.jpg')";
  }
  getsize()
  {
    return "120%";
  }

  onSubmit(){
    this.clicked=1;
    this._http.post<any>('http://localhost:3000/login',this.userModel)
    .subscribe((data)=>{
      console.log("success data received",data.EXIST);
      if(data.EXIST)
      {this.router.navigate(['login/user']);
      this.correct=1;}
      },(error)=> console.log('error in loginComp',error)
    ),
    this.exist=false;
    this._http.post<any>('http://localhost:3000/login2',this.userModel2)
    .subscribe((data)=>{console.log("login2 successful");this.submitted=true},(error)=> this.exist=true
    ),
    this.exist=false;
    this._http.post<any>('http://localhost:3000/login3',this.userModel3)
    .subscribe((data)=>{console.log("login3 successful");this.submitted=true},(error)=> this.exist=true
    ),
    this.exist=false;
    this._http.post<any>('http://localhost:3000/login4',this.userModel4)
    .subscribe((data)=>{console.log("login4 successful");this.submitted=true},(error)=> this.exist=true
    )
  }
  
  

  ngOnInit() {    
                console.log("model:",this.userModel);
                console.log("stu:",this.user);
                console.log("pass:",this.pass);
                console.log("pass:",this.xyz);//
                console.log("response:",this.response);
                console.log("response2",this.response[1]);
                console.log("res_model4:",this.userModel4);
                //update score+=xyz in table; localStorage.removeItem('spanval');
                //logout --> localStorage.removeItem('username');  localStorage.removeItem('password');
  }
  Submit()
  {
    
    this.student.username = this.userModel.username;
    this.student.password = this.userModel.password;
    console.log(this.student);
    console.log(this.userModel);
    this.homeservice.createstudent(this.student);
    this.student = {username:"", password:""};
  }

}








