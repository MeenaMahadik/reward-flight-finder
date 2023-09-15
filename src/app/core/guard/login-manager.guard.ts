import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/services';

@Injectable({
  providedIn: 'root'
})
export class LoginManagerGuard implements CanActivate, CanActivateChild {
  constructor(private route: Router, private storageService: StorageService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(state);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorized(state);
  }

  isAuthorized(state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve) => {
      this.storageService.getAuthToken().then((isHasToken: string) => {
        if (!isHasToken) {
          resolve(true);
        } else {
          let url = '/feature/dashboard';
          this.route.navigateByUrl(url, {replaceUrl: true});
          resolve(false);
        }
      });
    });
  }
}
