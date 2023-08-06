import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OrderComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    OrderComponent,
    SignUpComponent,
  ]
})
export class PagesModule { }
