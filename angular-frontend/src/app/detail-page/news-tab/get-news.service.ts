import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsData } from './news-data';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {

  constructor(private http: HttpClient) { }

  getNewsData(ticker: string): Observable<NewsData>{
    return this.http.get<NewsData>("/get-news/" + ticker);
  }
}
