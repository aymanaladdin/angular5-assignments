import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: {name: string}[];
  
    constructor(private usersService: UsersService) { }
  
    ngOnInit() {
      this.users = this.usersService.activeUsers;
    }
    
    deactiveUser(id: number){
      // console.log(id)
      this.usersService.deactivateUSer(id);
    }

}
