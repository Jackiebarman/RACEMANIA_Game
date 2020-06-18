import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../employee.service';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styles: []
})

export class ScoreComponent implements OnInit {
  students;
  stu;

  xyz =  localStorage.getItem("spanval");
  public users = [];
  public users2 = [];
  public employees = [];
  public employees2 = [];
  public errorMsg;
  islogin: boolean=false;
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
                console.log("students",this.students);  
                console.log("user2" ,this.users2); 

                this._employeeService.getscore().subscribe(data => {      
                this.users.push(data);               
                this.users2 = Object.assign({}, this.users[0]);
                var j:any;
                for(j in this.users2){
                  if(this.users2[j].username == this.stu)
                  {
                    console.log(this.users2[j].username);
                    console.log("Initial score is:",this.users2[j].score);
                    console.log("Final score is:",this.users2[j].score + parseInt(this.xyz));
                    console.log("before",this.xyz);
                    localStorage.setItem("spanval",'0');
                    console.log("after",this.xyz);
                  }
                }
                
                })   

                
                  
  }



}  
