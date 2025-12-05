import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { CartItem } from '../cart-item/cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, CartItem],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class Cart {
  items: Product[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = this.cartService.getTotal();
  }

  remove(index: number) {
    const removed = this.items[index];
    this.cartService.removeItem(index);
    this.items = this.cartService.getItems();
    this.calculateTotal();
    alert(removed.name + " removed from cart!");
  }
}
