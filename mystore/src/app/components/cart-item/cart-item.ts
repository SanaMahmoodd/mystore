import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.html',
  styleUrls: ['./cart-item.css']
})
export class CartItem {

  @Input() item!: Product;
  @Input() index!: number;

  @Output() removeItem = new EventEmitter<number>();

  remove() {
    this.removeItem.emit(this.index);
  }
}
