import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Room1Component } from './room1/room1.component';
import { AddRoomieComponent } from './add-roomie/add-roomie.component';

@NgModule({
  declarations: [
    AppComponent,
    Room1Component,
    AddRoomieComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'addroomies', component: AddRoomieComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
