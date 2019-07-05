import { Account } from './../../../interfaces/account';
import { AuthService } from './../../../services/auth.service';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'gw-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit, OnDestroy {
  public account = null;
  public subscriptions: Subscription[] = [];
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.subscriptions.push(this.authService.account.subscribe(account => {
      this.account = account;
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe);
  }

  public onLogin() {
    if (this.account) {
      this.authService.onLogin(null);
    } else {
      const account: Account = {
        username: 'Korey',
        status: 'Present',
        lastLogin: null,
        balance: 8
      };
      this.authService.onLogin(account);
    }
  }
}
