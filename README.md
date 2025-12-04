# 📦 MyStore – Angular Project

Simple Angular e-commerce demo project built with components, routing, services, and basic UI.


## 🚀 Features

- Product listing page  
- Product details page  
- Cart page  
- Checkout page  
- Header navigation  
- Data loading from local JSON file  
- Routing between pages  
- Reusable services + models  


## 📂 Project Structure

```
src/
 └── app/
     ├── components/
     │   ├── product-list/
     │   ├── product-details/
     │   ├── cart/
     │   ├── checkout/
     │   └── header/
     ├── models/
     │   └── product.ts
     ├── services/
     │   └── product.service.ts
     ├── app.routes.ts
     ├── app.config.ts
     ├── app.component.ts
     ├── app.component.html
     └── app.ts
 ├── assets/
 │    └── data.json
 ├── main.ts
 └── index.html
```


## 🛠️ Installation

### 1️⃣ Install dependencies:
```bash
npm install
```

### 2️⃣ Run the development server:
```bash
ng serve --open
```

The app will automatically open at:

👉 http://localhost:4200

If the port is busy:

```bash
ng serve --port 56575
```


## 📁 Data Source (assets/data.json)

Example:

```json
[
  { "id": 1, "name": "Book", "price": 9.99, "description": "A nice book" },
  { "id": 2, "name": "Headphones", "price": 249.99, "description": "High quality sound" }
]
```


## 🧩 Product Service (product.service.ts)

```ts
@Injectable({ providedIn: 'root' })
export class ProductService {
  private dataUrl = '/assets/data.json';

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


## 🌐 Routing (app.routes.ts)

```ts
export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'product/:id', component: ProductDetails },
  { path: 'cart', component: Cart },
  { path: 'checkout', component: Checkout },
  { path: '**', redirectTo: '' }
];
```


## 🧱 Main App Component (app.component.html)

```html
<app-header></app-header>
<router-outlet></router-outlet>
```


## 📦 Production Build

```bash
ng build
```


## ❤️ Author

Created by **Sana Saleh**  
ITI / MyStore Angular Project
