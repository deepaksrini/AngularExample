import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, ActivatedRoute } from '@angular/router';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private activatedRoute: ActivatedRoute) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
       
            return true;
        }
}