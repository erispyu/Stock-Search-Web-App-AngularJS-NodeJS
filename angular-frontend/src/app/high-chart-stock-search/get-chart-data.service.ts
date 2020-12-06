import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetChartDataService {

  constructor(private http: HttpClient) { }

  getChartData(ticker: string): Observable<any>{
    return this.http.get<any>("https://demo-live-data.highcharts.com/aapl-ohlcv.json");
  }
}
