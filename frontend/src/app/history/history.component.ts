import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { EmployeeService } from './../employee.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Router } from '@angular/router';
declare const myfun:any;
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public userModel=new User('','','','',+91,'','','');
  val: string = '';
  score: number = 0;
  date: string = '';
   x: any[] = [];
   y: any[] = [];
   z: any[] = [];
   zaq: any[] = [];
   final: any[] = [];
 correct=0;
 students;
 krishna;
 stu;
 pass;
 User;
 xyz =  localStorage.getItem("spanval");
 clicked=0

 callfun(){
  myfun();
}
geturl()
   {
     return "url('assets/blur3.jpg')";
   }
   geturl2()
   {
     return "url('assets/blur3.jpg')";
   }
   getsize()
   {
     return "100%";
   }
  
 public employees= [];
 public hisss = [];
 public users = [];
 public users2 = [];
 public errorMsg;
 studenthistory: {username,score,date} = {username:"", score:"",date:""};
  constructor(private _employeeService: EmployeeService,public _http:HttpClient,public router:Router,private homeservice:UsersService) { }

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

    this.students = this.homeservice.getstudents();
    this.stu = this.students[this.students.length - 1].username;
    this.pass = this.students[this.students.length - 1].password; 
    
    this._employeeService.getscore()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);

    this._employeeService.gethistory()
      .subscribe(data => this.hisss = data,
                error => this.errorMsg = error);

                console.log(this.employees);
                console.log(this.hisss);

                this._employeeService.gethistory().subscribe(data => {      
                  this.users.push(data);               
                  this.users2 = Object.assign({}, this.users[0]);
                  console.log("users2:",this.users2);
                  var j:any;
                  var k:any;
                  var l:any;
                  
                  k=0;
                  for(j in this.users2){
                    
                    if(this.users2[j].Username == this.stu)
                    {
                      this.x.push(this.users2[j].Username);
                      this.y.push(this.users2[j].score);
                      this.z.push(this.users2[j].DateTime);
                      this.zaq.push(this.x,this.y,this.z);
                      this.final.push(this.zaq);
                      this.val = this.users2[j].Username;
                      this.score= this.users2[j].score;
                      this.date= this.users2[j].DateTime;
                      k=k+1;
                      console.log(this.users2[j].Username);
                      console.log(this.users2[j].score);
                      console.log(this.users2[j].DateTime);
                      console.log(k);
                      
                      
                    }
                  }
                  
                  console.log("x:",this.x);
                  console.log("y:",this.y);
                  console.log("z:",this.z);
                  console.log(this.final);
                  console.log(this.zaq[0]);
                  console.log(this.zaq[1]);
                  });
      
  }

}

