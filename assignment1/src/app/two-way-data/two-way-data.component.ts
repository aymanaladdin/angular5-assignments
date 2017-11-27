import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-data',
  templateUrl: './two-way-data.component.html',
  styleUrls: ['./two-way-data.component.css']
})
export class TwoWayDataComponent implements OnInit {

  userName: string = '';
  //resetEnabled: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  // onInputChange(event){
  //   if(this.userName === '' || this.userName.trim() === ''){
  //     this.resetEnabled = false;
  //   }
  //   else{
  //     this.resetEnabled = true
  //   }
  // }

  enableResetBtn(){
    return (this.userName.length !== 0 && this.userName.trim().length !== 0);
  }

  onClickResetBtn(){
    this.userName = ''
    //this.resetEnabled = false;
  }

}
