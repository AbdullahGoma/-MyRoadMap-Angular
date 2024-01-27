import { CanActivateFn, Router } from '@angular/router';
import { ɵɵinject } from '@angular/core';
import { UserAuthenticationService } from '../Services/user-authentication.service';

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService =  ɵɵinject(UserAuthenticationService);
  const router =  ɵɵinject(Router);
  if(authService.isUserLogged)
  {
    return true;
  }
  else
  {
    alert("You must login First...");
    router.navigate(['/Login']);
    return false;
  }
  // return true;
};



