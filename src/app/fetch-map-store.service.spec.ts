import { TestBed } from '@angular/core/testing';

import { FetchMapStoreService } from './fetch-map-store.service';

describe('FetchMapStoreService', () => {
  let service: FetchMapStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMapStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
