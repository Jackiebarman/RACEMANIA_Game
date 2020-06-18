import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { EmployeeService } from './../employee.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router';
declare const myfun:any;
@Component({
  selector: 'app-loggedinuser',
  templateUrl: './loggedinuser.component.html',
  styleUrls: ['./loggedinuser.component.css']
})
export class LoggedinuserComponent implements OnInit {
  public userModel=new User('','','','',+91,'','','');
 correct=0;
 students;
 stu;
 pass;
 User;
 xyz =  localStorage.getItem("spanval");
 clicked=0

 callfun(){
  myfun();
}

 public employees = [];
 public errorMsg;
 public users = [];
  public users2 = [];
  public users3 = [];
  public users4 = [];
  constructor(private _employeeService: EmployeeService,public _http:HttpClient,public router:Router,private homeservice:UsersService) { }
  geturl()
  {
    return "url('assets/blur2.jpg')";
  }
  getsize()
  {
    return "100%";
  }
  onSubmit(){
    this.clicked=1;
    this._http.post<any>('http://localhost:3000/login/user',this.students)
    .subscribe((data)=>{
      console.log("success data received",1);
      if(1)
      {this.router.navigate(['user/profile']);
      this.correct=1;}
      },(error)=> console.log('error in loginComp',error)
    )
   }

  ngOnInit() {

    this._employeeService.getscore()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);

    this.students = this.homeservice.getstudents();
    this.stu = this.students[this.students.length - 1].username;
    this.pass = this.students[this.students.length - 1].password;
    localStorage.setItem("username",this.stu);
    localStorage.setItem("password",this.pass);   
    console.log("employees array:",this.employees);
    this._employeeService.getscore().subscribe(data => {      
      this.users.push(data);               
      this.users2 = Object.assign({}, this.users[0]);
      console.log("users2:",this.users2);
      var j:any;
      for(j in this.users2){
        if(this.users2[j].username == this.stu)
        {
          localStorage.setItem("initialscore",this.users2[j].score);
          localStorage.setItem("rank",j);
          console.log("users.name:",this.users2[j].username);
          console.log("after",this.xyz);
        }
      }
      
      });
      
  }

}
