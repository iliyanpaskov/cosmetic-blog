import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OrderComponent } from './pages/order/order.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'order',
    component:OrderComponent,
  },
  {
    path:'sign-up',
    component:SignUpComponent,
  },
  {
    path:'contacts',
    component:ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
