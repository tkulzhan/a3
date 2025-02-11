import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Import RouterModule so that <router-outlet> is known
  template: `
    <h1>Welcome to My Angular 19 App</h1>
    <nav>
      <a routerLink="/products" routerLinkActive="active">Products</a>
      |
      <a routerLink="/orders" routerLinkActive="active">Orders</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
