import { Component, OnInit, Input } from '@angular/core';
import { GetNewsService } from './get-news.service'
import { ArticleData } from './article-data';
import { NewsData } from './news-data';

import { DetailPageLoadingService } from '../detail-page-loading.service';

@Component({
  selector: 'app-news-tab',
  templateUrl: './news-tab.component.html',
  styleUrls: ['./news-tab.component.css']
})
export class NewsTabComponent implements OnInit {

  constructor(
    private getNews: GetNewsService,
    private loadingService: DetailPageLoadingService,
  ) { }

  isLoading: boolean;
  ticker: string;
  articles: ArticleData[];

  @Input() searchedTicker: string;

  ngOnInit(): void {
    this.isLoading = true;
    this.ticker = this.searchedTicker;
    this.getNews.getNewsData(this.ticker).subscribe(
      (data: NewsData) => {
        this.articles = data.articles;
        this.isLoading = false;
        this.loadingService.isLoadingNewsTab = false;
      }
    )
  }

}
