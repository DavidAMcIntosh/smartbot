import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {

  private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token: string = environment.token;

  constructor(private http: HttpClient) { }

  public getResponse(query: string) {
    const data = {
      query: query,
      lang: 'en',
      sessionId: '12345'
    };
    return this.http
      .post(`${this.baseURL}`, data, { headers: this.getHeaders()})
      .pipe(map(res => res));
  }

  public getHeaders() {
    let headers = new HttpHeaders().append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
