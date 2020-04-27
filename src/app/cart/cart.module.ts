import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartitemsComponent } from './cartitems/cartitems.component';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'
import {AuthenticationGuard} from '../authentication/Guards/authentication.guard'

const routes: Routes = [
  {
    path:'cart',
    component:CartitemsComponent,
    canActivate:[AuthenticationGuard]
  }
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
