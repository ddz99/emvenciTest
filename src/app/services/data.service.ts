// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router,NavigationEnd  } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://backend1.recruitment.cybersecurity.cloud/api'; 

  constructor(private http: HttpClient) {}

  getData(routeName: string): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/${routeName}`).pipe(
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
