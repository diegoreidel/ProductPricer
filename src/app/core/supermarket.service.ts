import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Supermarket } from '../shared/interfaces';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService extends AbstractService {

  private baseUrl = 'assets/';

  constructor(private http: HttpClient) {
    super();
  }

  getSupermarkets(): Observable<Supermarket[]> {
    return this.http.get<Supermarket[]>(this.baseUrl + 'supermarkets.json')
    .pipe(catchError(this.handleError));
  }

  postSupermarket(supermarket: Supermarket): Observable<any> {
    return this.http.post('https://putsreq.com/NX9n86OlaTqhctnSx3sV', supermarket);
  }
}
