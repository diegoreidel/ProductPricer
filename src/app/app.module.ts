import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SupermarketsModule } from './supermarket/supermarkets.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [SupermarketsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})

export class AppModule {
}
