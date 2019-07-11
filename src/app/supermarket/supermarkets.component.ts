 import { Component, Injectable, OnInit } from '@angular/core';

import { Supermarket } from '../shared/interfaces';
import { SupermarketService } from '../core/supermarket.service';

@Component({
  selector: 'app-supermarkets',
  templateUrl: './supermarkets.component.html',
  styleUrls: ['./supermarkets.component.scss']
})

@Injectable()
export class SupermarketsComponent implements OnInit {

  supermarkets: Supermarket[];

  constructor(private supermarketService: SupermarketService) { }

  ngOnInit() {
    this.supermarketService.getSupermarkets()
      .subscribe((supermarkets: Supermarket[]) => this.supermarkets = supermarkets);
  }
}
