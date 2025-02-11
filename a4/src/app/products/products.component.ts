import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  template: `
    <h2>Products Module</h2>
    <p>This is the products component.</p>
  `,
  styles: [`
    h2 { color: darkgreen; }
  `]
})
export class ProductsComponent { }
