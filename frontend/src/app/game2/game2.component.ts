import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {

  constructor() { }

  geturl()
  {
    return "url('assets/car_img/bg.png')";
  }
  getsize()
  {
    return "100%";
  }

  ngOnInit() {
  }

}
