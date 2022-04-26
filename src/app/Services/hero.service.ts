import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Hero } from 'src/Hero';
import { catchError,throwError, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  private url = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.url);
  }

  getHero(id: number): Observable<Hero>{
    let url = `${this.url}/${id}`;
    // return this.http.get<Hero>(url, this.httpOptions);
    return this.http.get<Hero>(url, this.httpOptions).pipe(
        catchError(this.handleError));
  }

  editHero(hero : Hero): Observable<any>{
    return this.http.put(this.url, hero, this.httpOptions);
  }

  AddNewHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.url, hero, this.httpOptions);
  }

  deleteHero(hero: Hero): Observable<Hero>{
    const url = `${this.url}/${hero.id}`;

    return this.http.delete<Hero>(url, this.httpOptions);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
