import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  isLoggedIn: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn();
}

  onLogout() {
    this.isLoggedIn = !this.authService.logout();
    this.router.navigate(['/login']);
  }
}
