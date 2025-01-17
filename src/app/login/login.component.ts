import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',  // The selector used in HTML
  templateUrl: './login.component.html',  // Linking to HTML template
  styleUrls: ['./login.component.scss'] // Optional style file
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor() {
    // Initialize the form with controls
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // Submit function
  submit() {
    if (this.loginForm.invalid) {
      return; // If form is invalid, do nothing
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // You can handle login logic here, such as calling an API for authentication
    console.log('Email:', email, 'Password:', password);
  }
}
