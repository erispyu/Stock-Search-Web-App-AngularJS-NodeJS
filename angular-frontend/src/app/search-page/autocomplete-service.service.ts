import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Suggestion } from './suggestion';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private http: HttpClient) { }

  getSuggestions(ticker: string): Observable<Suggestion[]> {
    return this.http.get<Suggestion[]>("/autocomplete/" + ticker);
  }
}