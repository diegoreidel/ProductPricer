import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { SupermarketsComponent } from './supermarkets.component';
import { SupermarketsRoutingModule } from './supermarkets-routing.module';
import { SupermarketsListComponent } from './supermarkets-list/supermarkets-list.component';
import { SupermarketDetailsComponent } from './supermarket-details/supermarket-details.component';

@NgModule({
  declarations: [SupermarketsComponent, SupermarketsListComponent, SupermarketDetailsComponent],
  imports: [SharedModule, SupermarketsRoutingModule]
})

export class SupermarketsModule {
}
