import { Component } from '@angular/core';
import { Supermarket } from '../shared/interfaces';

@Component({
  selector: 'app-supermarkets',
  templateUrl: './supermarkets.component.html',
  styleUrls: ['./supermarkets.component.scss']
})

export class SupermarketsComponent {
  supermarket: Supermarket = {id: 1, name: 'Bourbon São Leopoldo', address: '1234 Somewhere St'};
}
