import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: any;

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
    } else {
      this.router.navigate(['/login']); // Redirect if not logged in
    }
  }

  logout() {
    localStorage.removeItem('user'); // Clear user session
    this.router.navigate(['/login']); // Redirect to login page
  }
}
