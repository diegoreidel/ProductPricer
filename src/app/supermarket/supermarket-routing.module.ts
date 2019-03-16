import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupermarketComponent } from './supermarket.component';

const routes: Routes = [
  { path: 'supermarkets', component: SupermarketComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SupermarketRoutingModule { }
