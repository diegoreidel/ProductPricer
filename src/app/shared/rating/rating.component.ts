import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnChanges {

  @Input() private rating: number;
  private starWidth: number;

  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

}
