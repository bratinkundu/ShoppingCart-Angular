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
    this.cartservice.addToCart(item)
    alert("Added to cart")
  }
}
