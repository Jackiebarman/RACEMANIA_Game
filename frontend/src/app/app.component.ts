
import { Component,OnInit, ElementRef, AfterViewInit, ViewChild, HostListener  } from '@angular/core';

import { UsersService } from './services/users.service';
import { Comments } from './classes/comments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'test';

  constructor(private _freeapiservice:UsersService) { }

  public ngAfterViewInit() {
		
	}

  lstcomments:Comments[];
  ngOnInit()
  {
    
  }
}
