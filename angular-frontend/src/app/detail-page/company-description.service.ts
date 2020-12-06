import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyDescriptionData } from './company-description-data';

@Injectable({
  providedIn: 'root'
})
export class CompanyDescriptionService {

  constructor(private http: HttpClient) { }

  getCompanyDescriptionData(ticker: string): Observable<CompanyDescriptionData>{
    return this.http.get<CompanyDescriptionData>("/get-company-description/" + ticker);
  }
}
