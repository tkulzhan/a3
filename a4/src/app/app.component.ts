import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomCardComponent } from './shared/components/custom-card/custom-card.component';
import { RxjsDemoComponent } from './shared/components/rxjs-demo/rxjs-demo.component';
import { DynamicFormComponent } from './shared/components/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CustomCardComponent, RxjsDemoComponent, DynamicFormComponent],
  template: `
    <h1>Welcome to My Angular 19 App</h1>
    <nav>
      <a routerLink="/products" routerLinkActive="active">Products</a>
      |
      <a routerLink="/orders" routerLinkActive="active">Orders</a>
    </nav>
    
    <!-- Custom Card Component -->
    <app-custom-card></app-custom-card>
    
    <!-- RxJS Demo Component -->
    <app-rxjs-demo></app-rxjs-demo>
    
    <!-- Dynamic Form Component -->
    <app-dynamic-form></app-dynamic-form>
    
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
