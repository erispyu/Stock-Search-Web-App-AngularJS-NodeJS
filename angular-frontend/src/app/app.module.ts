import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryTabComponent } from './detail-page/summary-tab/summary-tab.component';
import { NewsTabComponent } from './detail-page/news-tab/news-tab.component';
import { ChartsTabComponent } from './detail-page/charts-tab/charts-tab.component';
import { StockDetailBoardComponent } from './detail-page/stock-detail-board/stock-detail-board.component';
import { StockCaretIconComponent } from './detail-page/stock-detail-board/stock-caret-icon/stock-caret-icon.component';
import { StarIconComponent } from './detail-page/stock-detail-board/star-icon/star-icon.component';
import { HighChartStockSearchComponent } from './high-chart-stock-search/high-chart-stock-search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    DetailPageComponent,
    WatchlistPageComponent,
    PortfolioPageComponent,
    NavbarComponent,
    FooterComponent,
    SummaryTabComponent,
    NewsTabComponent,
    ChartsTabComponent,
    StockDetailBoardComponent,
    StockCaretIconComponent,
    StarIconComponent,
    HighChartStockSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatTabsModule,
    ChartModule,
    HighchartsChartModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      {path: '', component: SearchPageComponent},
      {path: 'details/:ticker', component: DetailPageComponent},
      {path: 'watchlist', component: WatchlistPageComponent},
      {path: 'portfolio', component: PortfolioPageComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
