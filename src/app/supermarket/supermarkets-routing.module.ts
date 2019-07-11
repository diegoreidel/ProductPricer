import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SupermarketsComponent } from './supermarkets.component';
import { SupermarketDetailsComponent } from './supermarket-details/supermarket-details.component';
import { SupermarketDetailsGuard } from './supermarket-details.guard';

const routes: Routes = [
  { path: 'supermarkets', component: SupermarketsComponent },
  { path: 'supermarkets/:id', component: SupermarketDetailsComponent, canActivate: [SupermarketDetailsGuard] }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SupermarketsRoutingModule { }
