import { Component, OnInit } from '@angular/core';

import { ExchangeRatesService} from '../exchange-rates.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  rates = [];

  constructor(private rateSrv: ExchangeRatesService) { }

  ngOnInit() {
    this.rateSrv.fetchRates()
      .subscribe(
        rates => this.rates = rates
      );
  }
}
