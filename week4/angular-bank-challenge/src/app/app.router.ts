import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AtmComponent } from './atm/atm.component';
import { TellerComponent } from './teller/teller.component';
import { LoginComponent } from './login/login.component';

export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'atm', component: AtmComponent },
  { path: 'teller', component: TellerComponent },
  { path: 'login', component: LoginComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
