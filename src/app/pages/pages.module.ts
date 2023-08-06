import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OrderComponent } from './order/order.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    OrderComponent,
    SignUpComponent,
    ContactsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    AboutComponent,
    OrderComponent,
    SignUpComponent,
    ContactsComponent,
    NotFoundComponent
  ]
})
export class PagesModule { }
