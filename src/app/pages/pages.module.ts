import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    OrderComponent,
  ]
})
export class PagesModule { }
