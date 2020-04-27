import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  check(n: string, p: string) {
    if (n === 'bkundu53@gmail.com' && p === '123456') {
      localStorage.setItem('username', n);
      this._router.navigate([''])
      return true;
    } else {
      alert('incorrect Data');
      return false;
    }
  }

  checkLogin() {
    if (localStorage.getItem('username') != null) {
      this._router.navigate(['home']);
    }
  }
  
  logOut() {
    localStorage.removeItem('username');
    this._router.navigate(['']);
  }
}
