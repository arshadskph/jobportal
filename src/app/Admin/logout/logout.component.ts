import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(  private Router :Router) { }

  ngOnInit(): void {

    window.localStorage.removeItem('userLoginData');
    window.localStorage.removeItem('currentUser');

    this.Router.navigate(['/AdminLogin'])
  }

}
