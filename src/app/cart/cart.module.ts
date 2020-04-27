import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartitemsComponent } from './cartitems/cartitems.component';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  
];

@NgModule({
  declarations: [CartitemsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class CartModule { }
