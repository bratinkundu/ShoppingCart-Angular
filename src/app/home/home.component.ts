import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  latestProducts : any =[]

  constructor(public itemservice : ItemService) { }

  ngOnInit(): void {
    this.itemservice.getLatestProducts().subscribe(
      data => {
        this.latestProducts = data
      }
    )
  }

}
