import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { MobileComponent } from './mobile/mobile.component';
import { LaptopComponent } from './laptop/laptop.component';
import { CamerasComponent } from './cameras/cameras.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

const routes: Routes = [
  {path:"details/:category/:itemId", component:ItemDetailComponent}
];

@NgModule({
  declarations: [MobileComponent, LaptopComponent, CamerasComponent, SearchbarComponent, ItemDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class ItemsModuleModule { }
