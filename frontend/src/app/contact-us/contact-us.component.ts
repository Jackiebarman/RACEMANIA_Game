import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }
  geturl()
  {
    return "url('assets/map.png')";
  }
  getsize()
  {
    return "100%";
  }

  ngOnInit() {
  }

}
