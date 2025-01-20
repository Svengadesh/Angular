import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // For HTTP requests (if needed)
import { FormsModule } from '@angular/forms';  // For using ngModel
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Importing your routes

// Importing Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  declarations: [  
    LoginComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Configure the routes in the app
    HttpClientModule,
    FormsModule  // Enable ngModel
  ],
  providers: [],
  bootstrap: []  // Bootstrap the main component
})
export class AppModule { }
