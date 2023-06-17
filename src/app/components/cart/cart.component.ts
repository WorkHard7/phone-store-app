import { Component, OnInit } from '@angular/core';
import { Product } from '../../mocks/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Product[] = [];

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.cartList = this.cartService.getItems();
    console.log('cartList', this.cartList);
  }
}
