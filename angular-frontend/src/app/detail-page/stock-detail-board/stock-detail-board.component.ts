import { Component, OnInit, Input, ViewChildren} from '@angular/core';
import { formatDate } from '@angular/common';

import { CompanyDescriptionData } from '../company-description-data';
import { CompanyDescriptionService } from '../company-description.service';

import { LatestPriceData } from '../latest-price-data';
import { LatestPriceService } from '../latest-price.service';

import { DetailPageLoadingService } from '../detail-page-loading.service';

import { WatchlistCardData } from '../../watchlist-page/watchlist-card-data';

@Component({
  selector: 'app-stock-detail-board',
  templateUrl: './stock-detail-board.component.html',
  styleUrls: ['./stock-detail-board.component.css']
})
export class StockDetailBoardComponent implements OnInit {
  constructor(
    private companyDescriptionService: CompanyDescriptionService,
    private latestPriceService: LatestPriceService,
    private loadingService: DetailPageLoadingService,
  ) { }

  ticker: string;
  companyName: string;
  exchangeCode: string;
  lastPrice: number;
  prevClose: number;
  change: number;
  changePercent: number; 
  currTimestamp: Date;
  currTimeStr: string;
  lastTimestamp: Date;
  lastTimeStr: string;
  isMarketOpen: boolean;

  stockColor: string;
  isChangePositive: boolean;

  isAddedToWatchlist: boolean;

  isLoading: boolean;

  @Input() searchedTicker: string;

  ngOnInit(): void {
    this.isLoading = true;
    this.ticker = this.searchedTicker;
    this.initData();
  }

  initData(){
    this.companyDescriptionService.getCompanyDescriptionData(this.ticker).subscribe(
      (data: CompanyDescriptionData) => {
        this.companyName = data.name;
        this.exchangeCode = data.exchangeCode;
      });
    this.latestPriceService.getLatestPriceData(this.ticker).subscribe(
      (data: LatestPriceData[]) => {
        this.lastPrice = data[0].last;
        this.prevClose = data[0].prevClose;
        this.change = data[0].last - data[0].prevClose;
        if (this.change > 0) {
          this.stockColor = "stock-green";
          this.isChangePositive = true;
        }
        else {
          this.stockColor = "stock-red";
          this.isChangePositive = false;
        }
        this.changePercent = this.change * 100 / data[0].prevClose;
        this.currTimestamp = new Date();
        this.currTimeStr = formatDate(this.currTimestamp, 'yyyy-MM-dd HH:mm:ss', "en-US", "UTC-8");
        this.lastTimestamp = data[0].timestamp;
        this.lastTimeStr = formatDate(this.lastTimestamp, 'yyyy-MM-dd HH:mm:ss', "en-US", "UTC-8");
        this.isMarketOpen = (this.currTimestamp > this.lastTimestamp) ? true : false;
    });
    this.isLoading = false;
    this.loadingService.isLoadingDetailBoard = false;
    this.isAddedToWatchlist = false;
  }

  watchlistBtnOnClick() {
    this.isAddedToWatchlist = !this.isAddedToWatchlist;
  }
}
