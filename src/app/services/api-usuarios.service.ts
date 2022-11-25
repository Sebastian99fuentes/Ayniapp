import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// eslint-disable-next-line @typescript-eslint/naming-convention
export class loginRequest {
  userMail: string;
  password: string;
}
// eslint-disable-next-line @typescript-eslint/naming-convention
export class registerRequest {
  userName: string;
  userMail: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiUsuariosService {

  apiUrl = 'http://localhost:5199/api/UserModel/login';
  apiUrlReg = 'http://localhost:5199/api/UserModel/login';

  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  loginUser(user: loginRequest): Observable<any> {
    return this.httpClient.post<loginRequest>(this.apiUrl, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<loginRequest>('Error occured'))
      );
  }

  registerUser(user: registerRequest): Observable<any> {
    return this.httpClient.post<registerRequest>(this.apiUrlReg, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<registerRequest>('Error occured'))
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
