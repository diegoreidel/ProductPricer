import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SupermarketsComponent } from './supermarkets.component';
import { SupermarketsRoutingModule } from './supermarkets-routing.module';

@NgModule({
  declarations: [SupermarketsComponent],
  imports: [CommonModule, SupermarketsRoutingModule],
  exports: [SupermarketsComponent]
})

export class SupermarketsModule {
}
