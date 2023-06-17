import { Injectable } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  constructor() { }

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
}
