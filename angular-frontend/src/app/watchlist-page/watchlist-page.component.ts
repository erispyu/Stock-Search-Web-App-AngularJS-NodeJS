import { Component, OnInit } from '@angular/core';
import { WatchlistCardData } from './watchlist-card-data';

@Component({
  selector: 'app-watchlist-page',
  templateUrl: './watchlist-page.component.html',
  styleUrls: ['./watchlist-page.component.css']
})
export class WatchlistPageComponent implements OnInit {

  constructor() { }

  cardArray: WatchlistCardData[];

  ngOnInit(): void {
    this.cardArray = JSON.parse(localStorage.getItem("watchListCards"));
  }
}