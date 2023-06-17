import { Injectable } from '@angular/core';
import { Product } from '../mocks/products';
import { HttpClient } from '@angular/common/http';
import { shipping } from '../interfaces/shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  constructor(
    private http: HttpClient
  ) { }

  addToCart(item: Product): void {
    this.cartItems.push(item);
  }

  getItems(): Product[] {
    return this.cartItems;
  }

  clearCart(): Product[] {
    this.cartItems = [];
    
    return this.cartItems;
  }

  getShippingPrices() {
    return this.http.get<shipping[]>
    ('/assets/shipping.json');
  }
}
