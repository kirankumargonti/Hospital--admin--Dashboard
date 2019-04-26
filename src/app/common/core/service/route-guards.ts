import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, CanActivateChild } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EntryGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private fire: AngularFireAuth
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.fire.authState.pipe(
      map((user: any) => user !== null)
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

}

@Injectable({
  providedIn: 'root'
})
export class ExitGuard implements CanActivate, CanActivateChild {

  constructor(
    private router: Router,
    private fire: AngularFireAuth
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.fire.authState.pipe(
      map((user: any) => user === null)
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

}
