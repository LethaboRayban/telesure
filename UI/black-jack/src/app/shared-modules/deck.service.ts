import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getDeck() {
    return this.http.get(`${this.url}/`);
  }

  // getHand() {
  //   return this.http.get(`${this.url}/hand`);
  // }


}
