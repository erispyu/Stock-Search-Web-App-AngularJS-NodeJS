import { TestBed } from '@angular/core/testing';

import { SearchedTickerService } from './searched-ticker.service';

describe('SearchedTickerService', () => {
  let service: SearchedTickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchedTickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
