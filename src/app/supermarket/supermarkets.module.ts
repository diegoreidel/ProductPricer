import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SharedModule } from '../shared/shared.module';

import { SupermarketsComponent } from './supermarkets.component';
import { SupermarketsRoutingModule } from './supermarkets-routing.module';
import { SupermarketsListComponent } from './supermarkets-list/supermarkets-list.component';
import { SupermarketDetailsComponent } from './supermarket-details/supermarket-details.component';
import { InMemorySupermarketService } from '../core/in-memory-supermarket.service';

@NgModule({
  declarations: [SupermarketsComponent, SupermarketsListComponent, SupermarketDetailsComponent],
  imports: [SharedModule, SupermarketsRoutingModule, HttpClientInMemoryWebApiModule.forRoot(InMemorySupermarketService)]
})

export class SupermarketsModule {
}
