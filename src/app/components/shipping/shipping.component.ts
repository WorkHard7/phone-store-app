import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shipping } from 'src/app/interfaces/shipping';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts!: Observable<shipping[]>;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
    console.log('shippingCosts: ', this.shippingCosts);
  }


}
