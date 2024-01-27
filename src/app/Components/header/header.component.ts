import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/Services/user-authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLogged: boolean;
  constructor(private authService: UserAuthenticationService) { 
    this.isUserLogged = this.authService.isUserLogged;
  }

  ngOnInit(): void {
    // this.isUserLogged = this.authService.isUserLogged;
    this.authService.getLoggedSub().subscribe(status => {
      this.isUserLogged = status;
    })
  }
}
