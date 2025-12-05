import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrls: ['./product-details.css']
})
export class ProductDetails {
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private cartService: CartService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((data) => {
      this.product = data!;
    });
  }

  goBack() {
    this.location.back();
  }

addToCart(product: Product) {
  this.cartService.addToCart(product);
  this.router.navigate(['/cart']);
  alert(product.name + " added to cart!");
}

}
