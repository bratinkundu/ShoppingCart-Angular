import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:any =[]
  constructor() { }

  addToCart(item) {
    this.cartItems.push(item);
    console.log(this.cartItems)
  }

  removeFromCart(item){
    this.cartItems.splice(this.cartItems.indexOf(item),1)
  }

  getItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }
}
