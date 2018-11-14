import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';

import { routes } from './app.router';
import { NavComponent } from './nav/nav.component';
import { BankService } from './bank.service';
import { AccountData } from './accountData';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AtmComponent,
    TellerComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [BankService, AccountData],
  bootstrap: [AppComponent]
})
export class AppModule { }
