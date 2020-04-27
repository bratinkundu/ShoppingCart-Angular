import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { SearchbarComponent } from 'src/app/items-module/searchbar/searchbar.component'

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  allMobiles:any =[]
  features
  itemData
  search
  
  constructor(public mobileservice:ItemService) { }

  ngOnInit(): void {
    this.getAllProduct()
    
  }


  getAllProduct(){
      this.mobileservice.getAllMobileData().subscribe(
        data =>{
          this.allMobiles = data
        }
      )
  }

  getText(text:string) {  
    console.log(text);  
    this.search = text;  
}

getItemDetails(category:string,itemid:number){
  this.mobileservice.getItemById(category,itemid).subscribe(
    data =>{
      this.itemData = data;
    }
  )
  this.features = this.itemData.Description.split(',');
}
}
