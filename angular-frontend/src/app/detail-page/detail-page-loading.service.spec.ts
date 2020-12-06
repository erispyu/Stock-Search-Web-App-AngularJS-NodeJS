import { TestBed } from '@angular/core/testing';

import { DetailPageLoadingService } from './detail-page-loading.service';

describe('DetailPageLoadingService', () => {
  let service: DetailPageLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailPageLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
