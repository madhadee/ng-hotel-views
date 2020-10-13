import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private hotelsBaseUrl = 'https://5df9cc6ce9f79e0014b6b3dc.mockapi.io/hotels/';

  constructor(private http: HttpClient) { }

  getHotels(locale: string): Observable<any[]> {
    return this.http.get<any[]>(this.hotelsBaseUrl + locale);
  }
}
