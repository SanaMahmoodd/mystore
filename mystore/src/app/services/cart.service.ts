import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  // عشان صفحة confirmation
  private lastOrderName = '';
  private lastOrderTotal = 0;

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems(): Product[] {
    return this.items;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  clearCart() {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  setLastOrder(name: string, total: number) {
    this.lastOrderName = name;
    this.lastOrderTotal = total;
  }

  getLastOrder() {
    return {
      name: this.lastOrderName,
      total: this.lastOrderTotal
    };
  }
}
