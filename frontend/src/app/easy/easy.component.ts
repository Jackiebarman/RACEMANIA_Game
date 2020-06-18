import { Component, OnInit } from '@angular/core';
declare const fun:any;
declare const next:any;
declare const button:any;
@Component({
  selector: 'app-easy',
  templateUrl: './easy.component.html',
  styleUrls: ['./easy.component.css']
})
export class EasyComponent implements OnInit {
  obj;
  call(){
    fun();
  }
  next(){
     next();
  }
  button(event: Event) {
    this.obj=event;
    button(this.obj);
    console.log(this.obj.currentTarget);
  }
  constructor() { }
  geturl()
  {
    return "url('assets/bg.jpg')";
  }
  getsize()
  {
    return "120%";
  }
  ngOnInit() {
  }

}
