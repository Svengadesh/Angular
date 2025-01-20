import { provideRouter, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',  // Redirect to login by default
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,  // The login page
  },
  {
    path: 'home',
    component: HomeComponent,  // Home page route
  },
  {
    path: 'register',
    component: RegisterComponent,  // Registration page route
  },
  {
    path: 'main',
    component: MainLayoutComponent,  // Main layout for wrapping routes (if needed)
    children: [
      // Put your other nested routes here if needed
    ]
  }
];
