import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { UsersService } from '../services/users.service';
import { scoreval } from '../scoreval';
declare const fun:any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  students;
  stu;

  scoreVal: string;
  public userModel=new scoreval('');

  public employees = [];
  public employees2 = [];
  public errorMsg;
  islogin: boolean=false;
  callfun(){
    fun();
  }
   geturl()
   {
     return "url('assets/blur2.jpg')";
   }
   geturl2()
   {
     return "url('assets/blur2.jpg')";
   }
   getsize()
   {
     return "120%";
   }

   xyz =  localStorage.getItem("spanval");
   xyz2 =  localStorage.getItem("rank");
   barman = parseInt(this.xyz2)+1;
   User;
  constructor(private _employeeService: EmployeeService,private homeservice:UsersService) { }

  ngOnInit() {
    this._employeeService.getscore()
      .subscribe(data => this.employees = data,
                error => this.errorMsg = error);

    this._employeeService.getEmployees()
      .subscribe(data => this.employees2 = data,
                error => this.errorMsg = error);

                this.students = this.homeservice.getstudents();  
                this.stu = this.students[this.students.length - 1].username; 
                
                // var num: number = 38;
                // 
                // var i: number;
                // for(i=num-1;i>=0;i--)
                // {
                //   if(this.employees[i].username==this.stu)
                //   {
                //     this.employees[i].score+=this.xyz;
                //     console.log(i);
                //     console.log(this.employees[i].score);
                //     // update score in table
                //    // break;
                //   }
                // }
                
                
                //localStorage.setItem("spanval",'0');
                console.log(this.stu);   
                console.log(this.xyz);
                console.log(this.User); 
                console.log(this.scoreVal) ;
                              
                 
  }

}
