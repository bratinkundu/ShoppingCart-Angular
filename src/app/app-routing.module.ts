import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobileComponent } from './items-module/mobile/mobile.component';
import { CamerasComponent } from './items-module/cameras/cameras.component';
import { LaptopComponent } from './items-module/laptop/laptop.component';
import { ItemDetailComponent } from './items-module/item-detail/item-detail.component';
import { CartitemsComponent } from './cart/cartitems/cartitems.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"mobile", component:MobileComponent},
  {path:"camera", component:CamerasComponent},
  {path:"laptop", component:LaptopComponent},
  {path:"details/:category/:itemId", component:ItemDetailComponent},
  {path:"cart", component:CartitemsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
