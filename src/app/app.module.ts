import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewAllComponent } from './view-all/view-all.component';
import { RouterModule } from '@angular/router';

const myRoute=[
  {
    path:"",
    component:AddProductComponent
  },
  {
    path:"view",
    component:ViewAllComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
