import { Component, ElementRef, AfterViewInit, ViewChild, HostListener  } from '@angular/core';
import { AppService } from '../services/app.service';
import { GameService } from '../services/game.service';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})


 

export class PlayComponent implements AfterViewInit{

  @ViewChild('canvas',{ static: false }) public canvas: ElementRef;
	subscription: any;
	showLoader = true;
	clicked=false;
	score=0;
	star= new Date();
	end;
	js_end='';
	js_start='';
	span;
	start()
	{
		this.clicked=true;
		var temp=0;
		var prev=0;
		console.log(this.clicked);

		
		this.js_start=formatDate(this.star, 'hh:mm:ss', 'en-US', '+0530');
		console.log(this.js_start);
		
			  var downloadTimer = setInterval(function()
			  {
				document.getElementById("countdown").innerHTML = ""+temp  ;
				temp += 1;
				prev=temp;
				this.span = document.getElementById("countdown");
			    localStorage.setItem("racecoin",this.span.textContent);
			  }, 1000);
			  
		this.run();
		console.log(this.gameService.flag);
		console.log(prev);
		
	}

	constructor(
		private appService: AppService,
		private gameService: GameService
	) {
		
	}
	run()
	{
		
		const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
		this.appService.createPlayGround(canvasEl);
			
			this.subscription = this.appService.getImageLoadEmitter()
			.subscribe((item) => {
				this.showLoader = false;
					this.gameService.startGameLoop();
					
				
			});	  
		
	}
	public ngAfterViewInit() {
		this.clicked=false;
		this.score=0;
		
		
	}

	@HostListener('document:keydown', ['$event']) onKeydownHandler(event: KeyboardEvent) {
		this.appService.movePlayer(event, 'keydown');
	}

	@HostListener('document:keyup', ['$event']) onKeyupHandler(event: KeyboardEvent) {
		this.appService.movePlayer(event, 'keyup');
	}

}
