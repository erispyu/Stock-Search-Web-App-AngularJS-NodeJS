import { Component, OnInit } from '@angular/core';
import { DetailPageLoadingService } from '../detail-page-loading.service';

@Component({
  selector: 'app-charts-tab',
  templateUrl: './charts-tab.component.html',
  styleUrls: ['./charts-tab.component.css']
})
export class ChartsTabComponent implements OnInit {
  isLoading: boolean;

  constructor(
    private detailPageLoadingService: DetailPageLoadingService,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.initData();
  }

  initData() {
    this.isLoading = false;
    this.detailPageLoadingService.isLoadingChartsTab = false;
  }

}
