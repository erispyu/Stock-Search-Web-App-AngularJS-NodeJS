import { Component, OnInit } from '@angular/core';
import { SearchedTickerService } from '../searched-ticker.service';
import { DetailPageLoadingService } from './detail-page-loading.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  ticker = this.searchedTicker.ticker;
  isLoading = this.detailPageLoadingService.isLoadingChartsTab || 
              this.detailPageLoadingService.isLoadingDetailBoard ||
              this.detailPageLoadingService.isLoadingNewsTab ||
              this.detailPageLoadingService.isLoadingSummaryTab;

  constructor(
    private searchedTicker: SearchedTickerService,
    private detailPageLoadingService: DetailPageLoadingService,
  ) { }

  ngOnInit(): void {
  }
  
}