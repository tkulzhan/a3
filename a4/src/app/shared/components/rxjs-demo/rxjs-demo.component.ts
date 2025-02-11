import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf and ngFor
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-rxjs-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>RxJS Demo</h2>
    <p *ngIf="!squaredNumbers">Loading squared numbers...</p>
    <ul *ngIf="squaredNumbers">
      <li *ngFor="let num of squaredNumbers">{{ num }}</li>
    </ul>
  `,
  styles: [`
    h2 { color: purple; }
    ul { list-style-type: none; padding: 0; }
    li {
      background: #f1f1f1;
      margin: 4px 0;
      padding: 8px;
      border-radius: 4px;
    }
  `]
})
export class RxjsDemoComponent implements OnInit {
  squaredNumbers: number[] | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSquaredNumbers().subscribe(data => {
      this.squaredNumbers = data;
    });
  }
}
