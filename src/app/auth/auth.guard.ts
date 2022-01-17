import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate()
    {
    const username=localStorage.getItem('username');
    const  password=localStorage.getItem('password');
    if(username && password)
    {
    return true;
    }

      this.router.navigate(['/login']);
      return false;

  }
}

