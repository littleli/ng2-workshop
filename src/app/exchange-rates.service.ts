import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ExchangeRatesService {
  private _headers = new Headers({'Access-Control-Allow-Origin': '*'});

  constructor(private http: Http) {
  }

  fetchRates(): Observable<any> {
    return this.http.get(`http://kurzycnb.appspot.com/v1/aktualni`, this._headers)
      .map(res => Object.entries(res.json()))
      .map(pairs => pairs.filter(v => !v[0].startsWith('issue_')))
      .map(pairs => pairs.map(([key, value]) => ({symbol: key, value})));
  }
}
