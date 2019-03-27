import { NgModule } from '@angular/core';

import { SupermarketsComponent } from './supermarkets.component';
import { SupermarketsRoutingModule } from './supermarkets-routing.module';
import { SupermarketsListComponent } from './supermarkets-list/supermarkets-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SupermarketsComponent, SupermarketsListComponent],
  imports: [SharedModule, SupermarketsRoutingModule],
  exports: [SupermarketsComponent, SupermarketsListComponent]
})

export class SupermarketsModule {
}
