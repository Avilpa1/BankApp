import { Injectable } from '@angular/core';

@Injectable()

export class AccountData {
    ACCOUNTS: any[] = [
    {   
        indexNum: 0,
        fname: '',
        lname: '',
        age: '',
            address: {
            street: '',
            city: '',
            state: '',
            zip: '',
            country: ''
            },
        },    
        
    {
        indexNum: 1,
        fname: 'Gerardo',
        lname: 'Soto',
        age: 62,
            address: {
            street: '1524 Regents Ave.',
            city: 'Chula Vista',
            state: 'CA',
            zip: 92115,
            country: 'USA'
            },
        balance: 100.20,
        savingsBalance: 1264.22,
        currency: 'USD',
        transactions: [
            {
            date: '01/01/01',
            type: 'Deposit',
            amount: 200.00,
            currency: 'USD'
            },
            {
            date: '02/02/02',
            type: 'Deposit',
            amount: 100.00,
            currency: 'USD'
            },
            {
            date: '03/03/03',
            type: 'withdrawal',
            amount: 2.00,
            currency: 'USD'
            }
            ]
        },
    
    {
        indexNum: 2,
        fname: 'Paul',
        lname: 'Avila',
        aNum: 2215,
        age: 31,
        address: {
            street: '2260 Delany Dr.',
            city: 'San Ysidro',
            state: 'CA',
            zip: 92173,
            country: 'USA',
            },
        balance: 1122.05,
        savingsBalance: 5264.22,
        currency: 'USD',
        transactions: [
            {
            date: '01/01/01',
            type: 'withdrawal',
            amount: 200.00,
            currency: 'USD'
            },
            {
            date: '02/02/02',
            type: 'deposit',
            amount: 1300.00,
            currency: 'USD'
            },
            {
            date: '03/03/03',
            type: 'Deposit',
            amount: 22.00,
            currency: 'USD'
            }
            ],
        savingsTransactions: [
            {
            date: '01/01/01',
            type: 'withdrawal',
            amount: 500.00,
            currency: 'USD'
            },
            {
            date: '02/02/02',
            type: 'deposit',
            amount: 4300.00,
            currency: 'USD'
            },
            {
            date: '03/03/03',
            type: 'Deposit',
            amount: 52.00,
            currency: 'USD'
            }
            ]    
            
        },
        
    {
        indexNum: 3,
        fname: 'Robert',
        lname: 'Brown',
        age: 31,
        address: {
            street: '2260 Delany Dr.',
            city: 'San Ysidro',
            state: 'CA',
            zip: 92173,
            country: 'USA',
            },
        balance: 10000.31,
        savingsBalance: 7264.22,
        currency: 'USD',
        transactions: [
            {
            date: '01/01/01',
            type: 'withdrawal',
            amount: 2030.00,
            currency: 'USD'
            },
            {
            date: '02/02/02',
            type: 'deposit',
            amount: 1600.00,
            currency: 'USD'
            },
            {
            date: '03/03/03',
            type: 'withdrawal',
            amount: 872.00,
            currency: 'USD'
            }
            ]
        },
        
    {
        indexNum: 4,
        fname: 'Tony',
        lname: 'Avila',
        age: 31,
        address: {
            street: '2260 Delany Dr.',
            city: 'San Ysidro',
            state: 'CA',
            zip: 92173,
            country: 'USA',
            },
        balance: 100000.01,
        savingsBalance: 5264.22,
        currency: 'USD',
        transactions: [
            {
            date: '01/01/01',
            type: 'withdrawal',
            amount: 200.00,
            currency: 'USD'
            },
            {
            date: '02/02/02',
            type: 'deposit',
            amount: 1300.00,
            currency: 'USD'
            },
            {
            date: '03/03/03',
            type: 'Deposit',
            amount: 22.00,
            currency: 'USD'
            }
            ],
        savingsTransactions: [
            {
            date: '01/01/01',
            type: 'withdrawal',
            amount: 500.00,
            currency: 'USD'
            },
            {
            date: '02/02/02',
            type: 'deposit',
            amount: 4300.00,
            currency: 'USD'
            },
            {
            date: '03/03/03',
            type: 'Deposit',
            amount: 52.00,
            currency: 'USD'
            }
            ]
        }    
];

  id: any[] = [
        { nullUser: '0' },
        { gsoto: '1', password: 'test' },
        { pavila: '2' },
        { rbrown: '3' },
        { tony: '4' }
    
    ];



}