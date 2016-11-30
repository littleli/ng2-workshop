/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExchangeRatesService } from './exchange-rates.service';

describe('ExchangeRatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeRatesService]
    });
  });

  it('should ...', inject([ExchangeRatesService], (service: ExchangeRatesService) => {
    expect(service).toBeTruthy();
  }));
});
