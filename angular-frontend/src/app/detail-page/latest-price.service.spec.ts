import { TestBed } from '@angular/core/testing';

import { LatestPriceService } from './latest-price.service';

describe('LatestPriceService', () => {
  let service: LatestPriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestPriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
