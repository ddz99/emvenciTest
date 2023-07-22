import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://backend1.recruitment.cybersecurity.cloud/api';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const loginData = {
      username: username,
      password: password,
    };

    return this.http.post<any>(`${this.apiUrl}/login`, loginData).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        // Handle error if the request fails
        return of(error);
      })
    );
  }

}
