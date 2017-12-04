import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-number',
  templateUrl: './even-number.component.html',
  styleUrls: ['./even-number.component.css']
})
export class EvenNumberComponent implements OnInit {
  @Input() counter: number;
  
  constructor() { }

  ngOnInit() {
  }

}
