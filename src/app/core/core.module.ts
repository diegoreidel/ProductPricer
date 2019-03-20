import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SupermarketService } from './supermarket.service';

@NgModule({
  declarations: [],
  imports: [ HttpClientModule ],
  providers: [ SupermarketService ]
})
export class CoreModule { }
