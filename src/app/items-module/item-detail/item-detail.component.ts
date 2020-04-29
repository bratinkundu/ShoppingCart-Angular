import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { ActivatedRoute} from '@angular/router'
import { CartService } from '../../services/cart.service'


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  features;
  itemData;
  constructor(private route: ActivatedRoute,public itemservice : ItemService, public cartservice: CartService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.itemservice.getItemById(params.get('category'),params.get('itemId')).subscribe(
        data =>{
          this.itemData = data
          this.features = this.itemData.Description.split(',')
        }
      )
    });
  }

  addtoCart(item){
    this.cartservice.addToCart(item).subscribe(
       () =>{
        alert("Added to cart")
       }
     )
  }

  checkProduct(item)
  {
    var localitem
    this.cartservice.getCartItem(item.id).subscribe(
      data =>{
        localitem = data
        if(localitem.qyt >= 1)
        {
          localitem.qyt = localitem.qyt + 1
          this.editProduct(localitem)
        }
      },
      error =>{
        item.qyt = 1
        this.addtoCart(item)
      }
    )
  }

  editProduct(item){
    this.cartservice.editInCart(item).subscribe(
      data =>{
        alert('Product added to cart')
      }
    )
  }
}
