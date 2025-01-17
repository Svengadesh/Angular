import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Using the existing `app.routes.ts`

@NgModule({
  declarations: [], // Add components here
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Use existing `app.routes.ts`
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
