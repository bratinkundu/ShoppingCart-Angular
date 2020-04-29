import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _router:Router) { }

  login:boolean
  ngOnInit(): void {
    this.checkLogin()
  }

  checkLogin() {
    if (localStorage.getItem('username') != null) {
      this.login = false
    }
    else{
      this.login = true
    }
  }
  logOut() {
    localStorage.removeItem('username');
    this.login = true
    alert('You are logged out succesfully')
    this._router.navigate(['']);
  }
}
