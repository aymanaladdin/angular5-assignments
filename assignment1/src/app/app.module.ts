import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

//for type script to recognize these vars
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent} from './warning-alert/warning-alert.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';
import { ToggleDataComponent } from './toggle-data/toggle-data.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddNumberComponent } from './odd-number/odd-number.component';
import { EvenNumberComponent } from './even-number/even-number.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';

//services
import { UsersService } from './services/users.service';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    TwoWayDataComponent,
    ToggleDataComponent,
    GameControlComponent,
    OddNumberComponent,
    EvenNumberComponent,
    ActiveUsersComponent,
    InactiveUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UsersService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
