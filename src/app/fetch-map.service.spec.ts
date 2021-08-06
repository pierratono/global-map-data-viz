import { TestBed } from '@angular/core/testing';

import { FetchMapService } from './fetch-map.service';

describe('FetchMapService', () => {
  let service: FetchMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
