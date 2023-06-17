import { Component, OnInit, OnChanges } from '@angular/core';
import { Product } from '../../mocks/products';
import { CartService } from 'src/app/services/cart.service';
import { FormBuilder, Validators, ValidatorFn, AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {
  cartList: Product[] = [];

  checkoutForm = this.formBuilder.group({
    name: ['', 
    [
      Validators.required, 
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z]+$')
    ]
  ],
    address: ['', 
    [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(/[a-zA-Z0-9\s\-,]+/)
    ],
  ]
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.cartList = this.cartService.getItems();
  }

  onSubmit(): void {
    this.cartList = this.cartService.clearCart();
    console.warn('Your order has been submitted',  this.checkoutForm.value);

    this.checkoutForm.reset();
  }

  ngOnChanges() {
    console.log(this.checkoutForm);
  }
}
