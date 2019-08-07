import { Observable, ObservableInput, throwError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Supermarket } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SupermarketService {

  private baseUrl = 'assets/';

  constructor(private http: HttpClient) { }

  getSupermarkets(): Observable<Supermarket[]> {
    return this.http.get<Supermarket[]>(this.baseUrl + 'supermarkets.json')
    .pipe(catchError(this.handleError));
  }

  postSupermarket(supermarket: Supermarket): Observable<any> {
    return this.http.post('https://putsreq.com/NX9n86OlaTqhctnSx3sV', supermarket);
  }

  handleError(err: HttpErrorResponse): ObservableInput<Supermarket[]> {

    let errorMessage = '';

    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error ocurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, message is: ${err.message}`;
    }

    return throwError(errorMessage);
  }
}
