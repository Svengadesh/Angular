import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Import AppComponent
import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// Ensure the AppModule is correctly bootstrapped
platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));
