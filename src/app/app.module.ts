import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SupermarketModule } from './supermarket/supermarket.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SupermarketModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
