import { TestBed } from '@angular/core/testing';

import { PtomotionAdsService } from './ptomotion-ads.service';

describe('PtomotionAdsService', () => {
  let service: PtomotionAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PtomotionAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
