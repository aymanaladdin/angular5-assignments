export class CounterService {
    counter: number;
    
    constructor() {
        this.counter = 0;
    }

    count(){
        this.counter++;
        console.log(this.counter);
    }

}