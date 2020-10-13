import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private readonly hotelsBaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getHotels(locale: string): Observable<any[]> {
    return this.http.get<any[]>(this.hotelsBaseUrl + locale);
  }
}
