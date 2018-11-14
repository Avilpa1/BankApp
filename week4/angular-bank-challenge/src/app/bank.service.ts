import { Injectable } from '@angular/core';
import { AccountData } from './accountData'


@Injectable()
export class BankService {
  user: any = '0';
  password: any
  account: any
  transactions: any
  date: any 
  today: any
  amount: any
  amount2: any
  amountDecimal: any
  
    constructor(private _accountData: AccountData) {
      this.account = this._accountData.ACCOUNTS[this.user]
    }
    
  findUser() {
    this.user = document.getElementById('user')

    for (let x=0; x < this._accountData.id.length; x++) {
      
      if (this.user.value in this._accountData.id[x]) 
      {
        this.account = this._accountData.ACCOUNTS[x]
        return
      } else {
        this.account = this._accountData.ACCOUNTS[0]
      }
    }
  }
  
  
  
  deposit() {
    event.stopPropagation();
    this.amount = prompt('Amount to Deposit')
    
    if (this.amount) {
      
    this.amount2 = parseFloat(this.account.balance) + parseFloat(this.amount)
    this.account.balance = this.amount2.toFixed(2) 
      
      this.account.transactions.unshift({'date': '11/21/18', 'type': 'Deposit', 'amount': this.amount, 'currency': 'USD'});
    }
  }
  
  
  withdrawal() {
    event.stopPropagation();
    this.amount = parseFloat(prompt('Amount to Transfer'))
    let balance = parseFloat(this.account.balance)
    
    if(this.amount <= balance) {
      
    this.amount2 = parseFloat(this.account.balance) - parseFloat(this.amount)
    this.account.balance = this.amount2.toFixed(2) 

    this.account.transactions.unshift({'date': 'date', 'type': 'Withdrawal', 'amount': this.amount, 'currency': 'USD'});

  } else {
    alert("Insufficient funds")
    console.log( this.amount <= this.account.balance)
  }
  }
}