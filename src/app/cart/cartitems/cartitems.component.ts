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
  }

  getCartItems(){
    this.cartservice.getItems().subscribe(
      data =>{
        this.cartItems = data
        this.calculateTotal()
      }
    )
  }

  removeItem(item){
    this.cartservice.removeFromCart(item.id).subscribe(
      data =>{
        this.getCartItems()
      }
    )
  }

  calculateTotal(){
    this.totalAmount = 0
    for(let i in this.cartItems)
    {
      this.totalAmount += this.cartItems[i]['Price']*this.cartItems[i]['qyt']
    }
  }
}
