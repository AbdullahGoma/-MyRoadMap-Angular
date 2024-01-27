import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {
  private isLoggedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isUserLogged);
  }

  login(userName: string, password: string) {
    // Call Login api, and get Access Token
    let userToken = '123456789';
    localStorage.setItem("token", userToken);
    this.isLoggedSubject.next(true);
  }

  logout() {
    localStorage.removeItem("token");
    this.isLoggedSubject.next(false);
  }

  get isUserLogged(): boolean {
    return (localStorage.getItem('token')) ? true : false;
  }

  getLoggedSub(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }


}
