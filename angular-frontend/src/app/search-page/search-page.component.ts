import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Suggestion } from './suggestion';
import { AutocompleteService } from './autocomplete-service.service';

import { SearchedTickerService } from '../searched-ticker.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent implements OnInit {
  constructor(private autocompleteService: AutocompleteService,
              private searchedTicker: SearchedTickerService,
  ) { }

  ngOnInit(): void {
    this.isRequesting = false;
  }

  myControl = new FormControl();

  suggestions: Suggestion[];

  isRequesting: boolean;

  onKeyUp() {
    this.isRequesting = true;
    this.autocompleteService.getSuggestions(this.myControl.value)
    .subscribe(suggestions => {
      this.suggestions = suggestions;
      this.isRequesting = false;
    });
    
  }

  searchForStock(ticker: string) {
    this.searchedTicker.ticker = ticker;
  }
}