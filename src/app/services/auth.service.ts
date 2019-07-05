import { Account } from './../interfaces/account';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { NavigateService } from './navigate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string = null;

  public account = new BehaviorSubject<Account>(null);
  constructor(private navService: NavigateService) { }
  public onLogin(account: Account) {
    this.account.next(account);
    if (account) {
      this.navService.goto('dashboard');
    } else {
      this.navService.goto('');
    }
  }
}
