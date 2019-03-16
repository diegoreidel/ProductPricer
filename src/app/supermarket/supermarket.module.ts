import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupermarketComponent } from './supermarket.component';
import { SupermarketRoutingModule } from './supermarket-routing.module';

@NgModule({
  declarations: [SupermarketComponent],
  imports: [CommonModule, SupermarketRoutingModule],
  exports: [SupermarketComponent]
})

export class SupermarketModule {
}
