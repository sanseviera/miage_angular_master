import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core'

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  return authService.isLogged()
  .then(authentifie=>{
    if(authentifie){
      console.log("Vous êtes connecté, navigation autorisée");
      return true;
    }else{
      router.navigate(['/home']);
      return false;
    }
  });
};
