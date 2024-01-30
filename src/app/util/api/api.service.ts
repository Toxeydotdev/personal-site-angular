import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(protected httpClient: HttpClient) {}

  getApexStats() {
    return this.httpClient.get(
      `https://api.mozambiquehe.re/bridge?auth=${process.env['APEX_KEY']}&player=tehsnig&platform=PC`
    );
  }

  getCatFacts() {
    return this.httpClient.get('https://cat-fact.herokuapp.com/facts');
  }
}
