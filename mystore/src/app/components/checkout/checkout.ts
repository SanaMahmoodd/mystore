import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css'],
})
export class Checkout {
  name = '';
  address = '';
  card = '';
  total = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.total = this.cartService.getTotal();
  }

  submitOrder(form: NgForm) {
    if (form.valid) {
      this.router.navigate(['/confirmation'], {
        queryParams: { name: this.name, total: this.total }
      });

      this.cartService.clearCart();
    }
  }
}
