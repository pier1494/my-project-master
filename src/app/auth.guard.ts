import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CommonService } from './services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private commonService: CommonService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (this.commonService.isLoggedIn()) {
      return true;
    }

    // Se l'utente non è loggato, reindirizzalo alla pagina di login
    return this.router.createUrlTree(['/login']);
  }
}
