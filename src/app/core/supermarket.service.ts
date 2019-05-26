import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Supermarket } from '../shared/interfaces';

@Injectable()
export class SupermarketService {

  private baseUrl = 'assets/';

  constructor(private http: HttpClient) { }

  getSupermarkets(): Observable<Supermarket[]> {
    return this.http.get<Supermarket[]>(this.baseUrl + 'supermarkets.json');
  }
}
