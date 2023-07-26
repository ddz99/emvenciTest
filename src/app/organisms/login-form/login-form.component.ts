import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;

      this.authService.login(username, password).subscribe(
        (response) => {
          this.loginError = false;
          this.cdRef.detectChanges(); // Trigger change detection to update the UI
          this.router.navigate(['/persons']);
        },
        (error) => {
          console.error(error);
          this.loginError = true;
        }
      );
    }
  }
}
