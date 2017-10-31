import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewListComponentComponent } from './view-list-component/view-list-component.component';
import { AddListComponent } from './add-list/add-list.component';
import { ListService } from "./services/list.service";



@NgModule({
  declarations: [
    AppComponent,
    ViewListComponentComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
