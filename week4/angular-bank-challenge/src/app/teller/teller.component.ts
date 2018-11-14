import { Component } from '@angular/core';
import { AccountData } from '../accountData'
import { BankService } from '../bank.service'

@Component({
  selector: 'app-teller',
  templateUrl: './teller.component.html',
  styleUrls: ['./teller.component.css']
})

export class TellerComponent {

  account
 
   
    constructor(private accountService: BankService, private _accountData: AccountData) {
        this.account = this._accountData.ACCOUNTS[this.accountService.user]
    }

}

