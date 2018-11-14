import { Component } from '@angular/core';
import { BankService } from './bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  bankName = 'Bank of San Diego';
  
  private user: string;
  
  constructor(private accountService: BankService) {
    this.user = accountService.user;
  }
  
}
