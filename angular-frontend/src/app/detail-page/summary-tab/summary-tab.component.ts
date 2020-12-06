import { Component, OnInit, Input } from '@angular/core';

import { CompanyDescriptionData } from '../company-description-data';
import { CompanyDescriptionService } from '../company-description.service';

import { LatestPriceData } from '../latest-price-data';
import { LatestPriceService } from '../latest-price.service';

import { DetailPageLoadingService } from '../detail-page-loading.service';

@Component({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.css']
})
export class SummaryTabComponent implements OnInit {
  constructor(
    private companyDescriptionService: CompanyDescriptionService,
    private latestPriceService: LatestPriceService,
    private loadingService: DetailPageLoadingService,
  ) { }

  ticker: string;
  highPrice: number;
  lowPrice: number;
  openPrice: number;
  prevClose: number;
  volume: number;

  midPrice: number;
  askPrice: number;
  askSize: number;
  bidPrice: number;
  bidSize: number;

  companyDescription: string;
  startDate: string;

  isLoading: boolean;

  @Input() searchedTicker: string;

  ngOnInit(): void {
    this.isLoading = true;
    this.ticker = this.searchedTicker;
    this.initData();
  }

  initData() {
    this.companyDescriptionService.getCompanyDescriptionData(this.ticker).subscribe(
      (data: CompanyDescriptionData) => {
        this.companyDescription = data.description;
        this.startDate = data.startDate;
      });
    this.latestPriceService.getLatestPriceData(this.ticker).subscribe(
      (data: LatestPriceData[]) => {
        this.highPrice = data[0].high;
        this.lowPrice = data[0].low;
        this.openPrice = data[0].open;
        this.prevClose = data[0].prevClose;
        this.volume = data[0].volume;
        this.midPrice = data[0].mid;
        this.askPrice = data[0].askPrice;
        this.askSize = data[0].askSize;
        this.bidPrice = data[0].bidPrice;
        this.bidSize = data[0].bidSize
    });
    this.isLoading = false;
    this.loadingService.isLoadingSummaryTab = false;
  }

}