import { Component } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [HighlightDirective],
  template: `
    <div appHighlight="lightblue" class="card">
      <h3>Custom Card Component</h3>
      <p>This card uses a custom directive to highlight on hover!</p>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ccc;
      padding: 16px;
      border-radius: 8px;
      transition: background-color 0.3s ease;
      margin: 10px;
    }
  `]
})
export class CustomCardComponent { }
