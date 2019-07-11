import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { RatingComponent } from './rating/rating.component';

@NgModule({
  declarations: [RatingComponent],
  imports: [CommonModule, FormsModule, BrowserModule],
  exports: [RatingComponent, CommonModule, FormsModule, HttpClientModule, BrowserModule]
})
export class SharedModule {
}
