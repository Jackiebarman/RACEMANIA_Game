import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prev-years',
  templateUrl: './prev-years.component.html',
  styleUrls: ['./prev-years.component.css']
})
export class PrevYearsComponent implements OnInit {

  constructor() { }
  geturl()
  {
    return "url('assets/book.png')";
  }
  getsize()
  {
    return "100%";
  }
  ngOnInit() {
  }

}
