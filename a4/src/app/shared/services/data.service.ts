import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // Simulate an asynchronous operation that emits an array of numbers after a delay.
  getNumbers(): Observable<number[]> {
    return of([1, 2, 3, 4, 5]).pipe(
      delay(1000)  // 1 second delay to simulate an HTTP call
    );
  }

  // Use RxJS operators to transform the data (square each number).
  getSquaredNumbers(): Observable<number[]> {
    return this.getNumbers().pipe(
      map(numbers => numbers.map(n => n * n))
    );
  }
}
