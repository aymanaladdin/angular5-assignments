import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-data',
  templateUrl: './toggle-data.component.html',
  styleUrls: ['./toggle-data.component.css']
})
export class ToggleDataComponent implements OnInit {

  collapsed: boolean = false;
  counter: number = 0;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleBtn(){
     this.counter++;
     this.clicks.push(this.counter);
     this.collapsed = !this.collapsed;
  }
}
