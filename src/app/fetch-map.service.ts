import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchMapService {
  constructor(private http: HttpClient) {}
  getData() {
    // let url = 'https://api.vibmobile.com/webservices/ccodesmssql.php';
    let url = 'http://localhost:3080/';

    return this.http.get(url);
  }
}
