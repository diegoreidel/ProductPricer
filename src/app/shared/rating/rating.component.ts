import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {

  starWidth: number;
  @Input() rating: number;

  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

}
