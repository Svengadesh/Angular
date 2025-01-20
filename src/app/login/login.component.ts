import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    debugger;
    // Ensure localStorage is available before accessing it
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        this.router.navigate(['/home']);
      }
    }
  }

  login(): void {
    debugger;
    if (this.email === 'alex@email.com' && this.password === 'password123') {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('user', JSON.stringify({ email: this.email }));
      }
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }

  logout(): void {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('user');
    }
    this.router.navigate(['/login']);
  }
}
