import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailPageLoadingService {
  isLoadingDetailBoard: boolean;
  isLoadingSummaryTab: boolean;
  isLoadingNewsTab: boolean;
  isLoadingChartsTab: boolean;
  constructor() { }
}
