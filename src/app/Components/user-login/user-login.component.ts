import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/Services/user-authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit{

  isUserLogged: boolean = false;

  constructor(private authService: UserAuthenticationService) {

  }
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged;
  }


  login()
  {
    this.authService.login('UserName', 'Pass');
    this.isUserLogged = this.authService.isUserLogged;
  }

  logout()
  {
    this.authService.logout();
    this.isUserLogged = this.authService.isUserLogged;
  }
}
