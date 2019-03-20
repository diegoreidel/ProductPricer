import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupermarketsComponent } from './supermarkets.component';
import { SupermarketsRoutingModule } from './supermarkets-routing.module';
import { SupermarketsListComponent } from './supermarkets-list/supermarkets-list.component';

@NgModule({
  declarations: [SupermarketsComponent, SupermarketsListComponent],
  imports: [CommonModule, SupermarketsRoutingModule],
  exports: [SupermarketsComponent, SupermarketsListComponent]
})

export class SupermarketsModule {
}
