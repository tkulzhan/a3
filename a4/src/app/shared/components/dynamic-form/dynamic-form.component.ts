import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Custom validator: ensures the quantity is greater than zero.
export function positiveValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  return value > 0 ? null : { nonPositive: true };
}

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Dynamic Reactive Form</h2>
    <form [formGroup]="orderForm" (ngSubmit)="onSubmit()">
      <div formArrayName="items">
        <div *ngFor="let item of items.controls; let i = index" [formGroupName]="i" class="form-group">
          <label>Item {{ i + 1 }}</label>
          <input formControlName="name" placeholder="Item Name" class="form-control">
          <input formControlName="quantity" placeholder="Quantity" type="number" class="form-control">
          <!-- Use bracket notation for errors -->
          <div *ngIf="item.get('quantity')?.errors?.['nonPositive'] && item.get('quantity')?.touched" class="error">
            Quantity must be greater than zero.
          </div>
          <button type="button" (click)="removeItem(i)">Remove</button>
        </div>
      </div>
      <button type="button" (click)="addItem()">Add Item</button>
      <br>
      <button type="submit" [disabled]="orderForm.invalid">Submit Order</button>
    </form>
    <pre>{{ orderForm.value | json }}</pre>
  `,
  styles: [`
    .form-group {
      margin-bottom: 15px;
      border: 1px solid #ccc;
      padding: 10px;
      border-radius: 5px;
    }
    input.form-control {
      margin-bottom: 5px;
      display: block;
      width: 100%;
      padding: 8px;
    }
    button {
      margin-right: 5px;
    }
    .error {
      color: red;
      font-size: 0.9em;
    }
  `]
})
export class DynamicFormComponent implements OnInit {
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  // Helper to get the FormArray from the form
  get items(): FormArray {
    return this.orderForm.get('items') as FormArray;
  }

  // Creates a FormGroup for a single item with custom validation on quantity
  createItem(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', [Validators.required, positiveValidator]]
    });
  }

  // Adds a new item FormGroup to the FormArray
  addItem(): void {
    this.items.push(this.createItem());
  }

  // Removes an item FormGroup from the FormArray by index
  removeItem(index: number): void {
    this.items.removeAt(index);
  }

  // Handle form submission
  onSubmit(): void {
    console.log('Order submitted', this.orderForm.value);
  }
}
