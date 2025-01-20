import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from "../layout.module";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterModule, LayoutModule],
  template: `
    <div>
     <app-header class="sticky top-0 z-50 w-full "></app-header>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class MainLayoutComponent {}
