import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LatestPriceData } from './latest-price-data';

@Injectable({
  providedIn: 'root'
})
export class LatestPriceService {

  constructor(private http: HttpClient) { }

  getLatestPriceData(ticker: string): Observable<LatestPriceData[]>{
    return this.http.get<LatestPriceData[]>("/get-latest-price/" + ticker);
  }
}
