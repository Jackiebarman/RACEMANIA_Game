import { Component,OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Comments } from './classes/comments';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';

  constructor(private _freeapiservice:UsersService) { }
  lstcomments:Comments[];
  ngOnInit()
  {
    
  }
}
