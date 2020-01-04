import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Supermarket } from '../shared/interfaces';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService extends AbstractService {

  private baseUrl = 'api/supermarkets';

  constructor(private http: HttpClient) {
    super();
  }

  getSupermarkets(): Observable<Supermarket[]> {
    return this.http.get<Supermarket[]>(this.baseUrl)
    .pipe(catchError(this.handleError));
  }

  postSupermarket(supermarket: Supermarket): Observable<Supermarket> {
    return this.http.post<Supermarket>(this.baseUrl, supermarket)
    .pipe(catchError(this.handleError));
  }
}
