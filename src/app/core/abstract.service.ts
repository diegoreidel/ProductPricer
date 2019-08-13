import { HttpErrorResponse } from '@angular/common/http';
import { ObservableInput, throwError } from 'rxjs';

export class AbstractService {
  handleError(err: HttpErrorResponse): ObservableInput<any> {
    let errorMessage = '';
    errorMessage = `Server returned code: ${err.status}, message is: ${err.message}`;
    return throwError(errorMessage);
  }
}
