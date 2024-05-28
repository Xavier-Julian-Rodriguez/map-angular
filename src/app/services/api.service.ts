import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = `https://api.worldbank.org/v2/country`;
  constructor(private http: HttpClient) {}

  callApi(countryId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${countryId}?format=json`);
  }
}
