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
  componentTitle = 'Supermarkets';
  filterByTitle = 'Filter by:';
  filteredSupermarkets: Supermarket[] = [];

  private _filter: string;
  private _supermarkets: Supermarket[] = [];

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredSupermarkets = this._filter
      ? this.performFilter(this._filter)
      : this._supermarkets;
  }

  @Input() get supermarkets(): Supermarket[] {
    return this._supermarkets;
  }

  set supermarkets(value: Supermarket[]) {
    if (value) {
      this.filteredSupermarkets = this._supermarkets = value;
    }
  }

  constructor(private sorterService: SorterService) {}

  ngOnInit() {}

  sort(prop: string) {
    this.filteredSupermarkets = this.sorterService.sort(
      this.filteredSupermarkets,
      prop
    );
  }

  performFilter(value: string): Supermarket[] {
    value = value.toLocaleLowerCase();
    return this._supermarkets.filter(
      (supermarket: Supermarket) =>
        supermarket.name.toLocaleLowerCase().indexOf(value) !== -1
    );
  }
}
