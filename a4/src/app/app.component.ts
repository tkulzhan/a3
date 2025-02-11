import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomCardComponent } from './shared/components/custom-card/custom-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CustomCardComponent],  // Import both RouterModule and the custom card component
  template: `
    <h1>Welcome to My Angular 19 App</h1>
    <nav>
      <a routerLink="/products" routerLinkActive="active">Products</a>
      |
      <a routerLink="/orders" routerLinkActive="active">Orders</a>
    </nav>
    <!-- Embed the custom card component -->
    <app-custom-card></app-custom-card>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
