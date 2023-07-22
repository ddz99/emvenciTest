import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loginError: boolean = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {}

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

      // Replace this with the actual authentication logic using your AuthService.
      this.authService.login(username, password).subscribe(
        (response) => {
          // Handle successful login here
          console.log(response);
          localStorage.setItem("jwt", response);
          this.loginError = false;
        },
        (error) => {
          // Handle login error here
          console.error(error);
          this.loginError = true;
        }
      );
    }
  }
}
