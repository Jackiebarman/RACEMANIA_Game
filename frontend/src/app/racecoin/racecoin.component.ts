import { Component, OnInit } from '@angular/core';

// import { EnrollmentService } from './../enrollment.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { EmployeeService } from './../employee.service';
import { User2 } from '../user2';
import { User3 } from '../User3';
import { User4 } from '../User4';
@Component({
  selector: 'app-racecoin',
  templateUrl: './racecoin.component.html',
  styleUrls: ['./racecoin.component.css']
})
export class RacecoinComponent implements OnInit {

  xyz=localStorage.getItem("racecoin");
  correct=0;
 students;
 stu;

   x: any[] = [];
   y: any[] = [];
   z: any[] = [];
   zaq: any[] = [];
   final: any[] = [];
  
 abc =  localStorage.getItem("initial_racescore");
 clicked=0
 student: {username,password} = {username:"", password:""};
 user = localStorage.getItem("username");
 pass = localStorage.getItem("password"); 
 date =  localStorage.getItem("date");
 set =  localStorage.getItem("set"); 
 response = JSON.parse(localStorage.getItem("my_answer"));

 public answerkey = [];
 public answerkey2 = [];
 public users = [];
 public users2 = [];

 public userModel=new User('','',this.user,'',+91,'',this.pass,'');
 public userModel2=new User2('','',this.user,'',+91,'',this.pass,'',parseInt(this.xyz)+parseInt(this.abc));
 public userModel3=new User3(this.user,this.pass,parseInt(this.xyz),this.date);
 //public userModel4=new User4(this.user,1,parseInt(this.response[0]),parseInt(this.response[1]),parseInt(this.response[2]));
 exist=false;
 submitted=false;

  loading =true;
  buttonText;
  constructor(private _employeeService: EmployeeService,public _http:HttpClient,public router:Router,private homeservice:UsersService) { }
  geturl()
  {
    return "url('assets/blur1.jpg')";
  }
  getsize()
  {
    return "60%";
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
    this._http.post<any>('http://localhost:3000/updateracecoin',this.userModel2)
    .subscribe((data)=>{console.log("update_coin successful");this.submitted=true},(error)=> this.exist=true
    )
  }
  
  

  ngOnInit() {    

          this._employeeService.getanswer().subscribe(data => {      
          this.users.push(data);               
          this.users2 = Object.assign({}, this.users[0]);
          console.log("users:",this.users);
           console.log("users2:",this.users2);
          var j:any;
          for(j in this.users2){
           if(this.users2[j].set_ID == this.set)
          {
                      this.x.push(this.users2[j].set_ID);
                      this.y.push(this.users2[j].q_no);
                      this.z.push(this.users2[j].answer);
                      this.zaq.push(this.x,this.y,this.z);
                      this.final.push(this.zaq);
                      this.answerkey.push(this.users2[j].set_ID,this.users2[j].q_no,this.users2[j].answer);
                      this.answerkey2.push(this.answerkey);
        }
      }
      
      });
                 console.log("set:",this.set);
                console.log("model:",this.userModel);
                console.log("stu:",this.user);
                console.log("pass:",this.pass);
                console.log("pass:",this.xyz);//
                console.log("response:",this.response);
                console.log("response2",this.response[1]);
                
                console.log("answers2:",this.answerkey);
                console.log("finalll:",this.final);
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









