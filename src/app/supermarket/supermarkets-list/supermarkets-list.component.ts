import { Component, Input, OnInit } from '@angular/core';

import { Supermarket } from '../../shared/interfaces';

@Component({
  selector: 'app-supermarkets-list',
  templateUrl: './supermarkets-list.component.html',
  styleUrls: ['./supermarkets-list.component.scss']
})
export class SupermarketsListComponent implements OnInit {

  private _supermarkets: Supermarket[] = [];
  @Input() get supermarkets(): Supermarket[] {
    return this._supermarkets;
  }

  set supermarkets(value: Supermarket[]) {
    if (value) {
      this.filteredSupermarkets = this._supermarkets = value;
    }
  }

  filteredSupermarkets: Supermarket[] = [];

  constructor() { }

  ngOnInit() {
  }

}
