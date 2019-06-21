import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpwrapperService {

  constructor(public http: HttpClient) { }

  get<T>(url: string): Observable<T> {
    return this.http.get(url).pipe(
      map(this.handleResponse),
      catchError(this.errorHandler),
      share());
  }

  private handleResponse(response: any) {
    return response || {};
  }

  private errorHandler(error: HttpErrorResponse) {
    console.error(
      `api returned status code ${error.status}, ` +
      `with error: ${error.error}`);

    return throwError('server error');
  }
}
