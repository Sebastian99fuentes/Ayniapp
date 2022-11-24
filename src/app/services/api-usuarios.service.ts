import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class loginRequest {
  userMail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {

  apiUrl = 'http://localhost:5199/api/UserModel/login';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  loginUser(user: loginRequest): Observable<any> {
    return this.httpClient.post<loginRequest>(this.apiUrl, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<loginRequest>('Error occured'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }  
}
