import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  
  counter: number;
  timer: any = undefined;

  @Output() counterEmitted: EventEmitter<number>;
  @Output() clearCounters : EventEmitter<number>;
  


  constructor() {
    this.counter = 0;
    this.counterEmitted = new EventEmitter<number>();
    this.clearCounters = new EventEmitter();
    
   }

  ngOnInit() {
  }

  onGameStart(){
    this.timer = setInterval(()=>{ 
      this.counter++;
      this.counterEmitted.emit(this.counter);
    }, 1000); 
  }

  onGameStop(){
    if(this.timer !== 'undefined'){
      clearInterval(this.timer);
      //this.counter = 0;
      //this.clearCounters.emit();
    }
  }

}
