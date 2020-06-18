import { TestBed } from '@angular/core/testing';

import { FreeApiService } from './free-api.service';

describe('FreeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreeApiService = TestBed.get(FreeApiService);
    expect(service).toBeTruthy();
  });
});
