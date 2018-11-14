import { Component } from '@angular/core';
import { AccountData } from '../accountData'
import { BankService } from '../bank.service'


@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})

export class AtmComponent {

  account
  transactions
  e
  x
  
    constructor(private accountService: BankService, private _accountData: AccountData) {
        this.account = this._accountData.ACCOUNTS[this.accountService.user];

    }
  
  showhide(id) {
    this.e = document.getElementById('checkTrans');
    this.e.style.visibility = (this.e.style.visibility == 'visible') ? 'hidden' : 'visible';
    this.e.style.height = (this.e.style.height == '315px') ? '0px' : '315px';
  }
  
    showhide2(id) {
    this.e = document.getElementById('savingsTrans');
    this.e.style.visibility = (this.e.style.visibility == 'visible') ? 'hidden' : 'visible';
    this.e.style.height = (this.e.style.height == '315px') ? '0px' : '315px';
  }
   

}

// this.e.style.display = (this.e.style.display == 'block') ? 'none' : 'block';