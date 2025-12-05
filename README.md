# 🌟 MyStore -- Angular E-Commerce Application

MyStore is a simple single-page e-commerce web application built using
**Angular Standalone Components**, **Routing**, **Services**, and
**Local JSON data**.\
The project demonstrates core Angular concepts such as data fetching,
navigation, user input handling, and clean component structure.

------------------------------------------------------------------------

# 🚀 Features

## 🛒 Store Experience

-   Browse product listing\
-   View product details\
-   Add items to shopping cart\
-   Remove items from cart\
-   View total price\
-   Checkout form with validation\
-   Order confirmation page

## 🧭 Core Angular Features

-   Standalone Components (no NgModules)
-   Angular Routing + RouterLink navigation
-   Shared CartService for cross-component data
-   Typed Product model
-   HttpClient data fetching from local JSON
-   Clean component hierarchy & maintainable structure

------------------------------------------------------------------------

# 📦 Installation & Running the Project

> ✔ **This project requires only `npm install` and `ng serve` to run.**

### 1️⃣ Install dependencies

``` bash
npm install
```

### 🔧 If you face Angular / zone.js version conflict

Update `package.json`:

``` json
"zone.js": "~0.16.0"
```

Then reinstall:

``` bash
rm -rf node_modules package-lock.json
npm install
```

### 2️⃣ Start development server

``` bash
ng serve --open
```

The application will open at:

👉 http://localhost:4200

------------------------------------------------------------------------

# 📂 Project Structure

    src/
     ├── app/
     │   ├── components/
     │   │   ├── product-list/
     │   │   ├── product-details/
     │   │   ├── cart/
     │   │   ├── checkout/
     │   │   └── confirmation/
     │   ├── services/
     │   │   └── cart.service.ts
     │   │   └── product.service.ts
     │   ├── models/
     │   │   └── product.ts
     │   ├── app.routes.ts
     │   ├── app.config.ts
     │   ├── app.component.html
     │   ├── app.component.ts
     │   └── app.component.css
     ├── assets/
     │   └── data.json
     ├── main.ts
     └── index.html

------------------------------------------------------------------------

# 🗂 Data Source (assets/data.json)

``` json
[
  {
    "id": 1,
    "name": "Book",
    "price": 9.99,
    "url": "https://example.com/book.jpg",
    "description": "A great book to improve your knowledge."
  }
]
```

------------------------------------------------------------------------

# 🧩 Product Service (product.service.ts)

``` ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map(products => products.find(p => p.id === id))
    );
  }
}
```

------------------------------------------------------------------------

# 🛒 Cart Service (cart.service.ts)

``` ts
@Injectable({ providedIn: 'root' })
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }
}
```

------------------------------------------------------------------------

# 🌐 Routing (app.routes.ts)

``` ts
export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'product/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: 'confirmation', component: Confirmation },
  { path: '**', redirectTo: '' }
];
```

------------------------------------------------------------------------

# 🧱 App Shell Structure

``` html
<app-header></app-header>
<router-outlet></router-outlet>
```

------------------------------------------------------------------------

# 📝 Checkout Form Validation

-   Name: minimum length required\
-   Address: required\
-   Credit card: must be 16 digits\
-   Button disabled until form becomes valid

------------------------------------------------------------------------

# 🎉 Confirmation Page

After submitting checkout form, user is redirected to `/confirmation`.

------------------------------------------------------------------------

# 🧹 Clean Code & Best Practices

✔ Angular Style Guide\
✔ Typed models\
✔ Reusable components\
✔ Clear folder structure\
✔ No console errors

------------------------------------------------------------------------

# 🏗 Build for Production

``` bash
ng build
```

------------------------------------------------------------------------

# 👩‍💻 Author

Developed by **Sana Saleh**\
MyStore -- Udacity Angular Project