import { Routes } from '@angular/router';

import { ProductList } from './components/product-list/product-list';
import { ProductDetails } from './components/product-details/product-details';
import { Cart } from './components/cart/cart';
import { Checkout } from './components/checkout/checkout';
import { Confirmation } from './components/confirmation/confirmation';

export const routes: Routes = [
  { path: '', component: ProductList },              // HOME
  { path: 'product/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'confirmation', component: Confirmation },

  // ANY WRONG LINK → REDIRECT TO HOME
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
