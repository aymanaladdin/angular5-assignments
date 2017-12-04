import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {
    activeUsers: {name: string}[];
    inactiveUsers: {name: string}[];

    constructor(private counter: CounterService){
        this.activeUsers = [{name: "User1"}, {name: "User2"}, {name: "User3"}];
        this.inactiveUsers = [{name: "User5"}, {name: "User4"}];
    }

    activateUSer(id: number){
        const user = this.inactiveUsers.splice(id, 1);
        this.activeUsers.push(user[0]);
        this.counter.count();
    }

    deactivateUSer(id: number){
        const user = this.activeUsers.splice(id, 1);
        this.inactiveUsers.push(user[0]);
        this.counter.count();
    }
    
}