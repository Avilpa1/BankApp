import { Component } from '@angular/core';
import { AccountData } from '../accountData'
import { BankService } from '../bank.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  account
 
   
    constructor(private accountService: BankService, private _accountData: AccountData) {
        this.account = this._accountData.ACCOUNTS[this.accountService.user]
    }

}