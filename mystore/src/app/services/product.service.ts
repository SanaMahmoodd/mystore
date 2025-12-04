import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataUrl = '/assets/data.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product[]>(this.dataUrl).pipe(
      map((products: any[]) => products.find(p => p.id === id)!)
    );
  }
}
