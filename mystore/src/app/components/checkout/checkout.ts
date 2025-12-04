import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {

  name: string = '';
  address: string = '';

  constructor(private router: Router) {}

  submitOrder() {
    if (!this.name || !this.address) {
      alert('Please enter your name and address');
      return;
    }

    alert('Order placed successfully!');

    this.router.navigate(['/confirmation']);
  }
}
