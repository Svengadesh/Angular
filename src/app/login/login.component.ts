import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',  
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.scss'] 
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

  submit() {
    if (this.loginForm.invalid) {
      return; 
    }

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // You can handle login logic here, such as calling an API for authentication
    console.log('Email:', email, 'Password:', password);
  }
}
