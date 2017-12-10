import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  @ViewChild('formObject')simpleForm: NgForm ;
  levels: string[];
  data: {};
  submitted: boolean;

  constructor() { 
    this.levels = ['Basic', 'Pro', 'Advanced'];
    this.submitted = false;
  }

  ngOnInit() {
    
  }

  onSubmit(){
    this.data = this.simpleForm.value
    this.simpleForm.reset();
    this.submitted = true;
  }



}
