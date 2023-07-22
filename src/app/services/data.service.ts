// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://backend1.recruitment.cybersecurity.cloud/api'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/persons`).pipe(
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
