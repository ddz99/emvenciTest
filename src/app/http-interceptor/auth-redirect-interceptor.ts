// auth-redirect.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRedirectGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/table']);
      return false;
    }
    return true;
  }
}