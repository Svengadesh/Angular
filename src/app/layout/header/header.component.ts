import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Only access localStorage on the client-side (browser)
      const user = localStorage.getItem('user');
      if (user) {
        console.log('User found:', user);
      } else {
        console.log('No user found in localStorage');
      }
    }
  }
}
