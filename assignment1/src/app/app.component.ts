import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  counters :number[]

  constructor(){
    this.counters = []
  }

  OnInit(){}

  displayCounter(counter: number){
    this.counters.push(counter);
    console.log(this.counters);
  }

  clrearCounterList(){
    this.counters = [];
  }
}
