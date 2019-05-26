import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SupermarketService } from './supermarket.service';
import { SorterService } from './sorter.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [SupermarketService, SorterService]
})
export class CoreModule {
}
