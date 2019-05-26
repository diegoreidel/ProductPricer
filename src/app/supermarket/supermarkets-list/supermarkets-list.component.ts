import { Component, Injectable, Input, OnInit } from '@angular/core';

import { Supermarket } from '../../shared/interfaces';
import { SorterService } from '../../core/sorter.service';

@Component({
  selector: 'app-supermarkets-list',
  templateUrl: './supermarkets-list.component.html',
  styleUrls: ['./supermarkets-list.component.scss']
})

@Injectable()
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

  constructor(private sorterService: SorterService) { }

  ngOnInit() {
  }

  sort(prop: string) {
    this.filteredSupermarkets = this.sorterService.sort(this.filteredSupermarkets, prop);
  }

}
