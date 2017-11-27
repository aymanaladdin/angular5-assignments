import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//for type script to recognize these vars
import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent} from './warning-alert/warning-alert.component';
import { TwoWayDataComponent } from './two-way-data/two-way-data.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    TwoWayDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
