import { Observable } from 'rxjs';
import { Supermarket } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';


@Injectable()
export class SupermarketService {

  private baseUrl = 'assets/';

  constructor(private http: HttpClient) { }

  getSupermarkets(): Observable<Supermarket[]> {
    return this.http.get<Supermarket[]>(this.baseUrl + 'supermarkets.json')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);

    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }

    return Observable.throw(error || 'Node.js server error');
  }
}
