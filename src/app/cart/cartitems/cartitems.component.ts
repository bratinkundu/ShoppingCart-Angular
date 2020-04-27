import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service'

@Component({
  selector: 'app-cartitems',
  templateUrl: './cartitems.component.html',
  styleUrls: ['./cartitems.component.css']
})
export class CartitemsComponent implements OnInit {

  constructor(public cartservice:CartService) { }

  selectedValue = 1
  totalAmount = 0
  totalDiscount = 0
  cartItems

  ngOnInit(): void {
    this.getCartItems()
    this.calculateTotal()
    console.log(this.cartItems)
  }

  getCartItems(){
    this.cartItems = this.cartservice.getItems()
  }

  removeItem(item){
    this.totalAmount -= item['Price']
    this.cartservice.removeFromCart(item)
  }
  select(){
    alert(this.selectedValue)
  }
  calculateTotal(){
    for(let i in this.cartItems)
    {
      this.totalAmount += this.cartItems[i]['Price']
    }
  }
}
