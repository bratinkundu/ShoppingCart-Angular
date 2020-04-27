import { Component, OnInit } from '@angular/core';
import {ItemService} from '../../services/item.service'

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor(public itemservice : ItemService) { }
  search
  allLaptops:any =[]
  ngOnInit(): void {
    this.getAllProduct()
  }

  getAllProduct(){
    this.itemservice.getAllLaptopData().subscribe(
      data =>{
        this.allLaptops = data
      }
    )
}
  
  getText(text:string) {  
    console.log(text);  
    this.search = text;  
}
}
