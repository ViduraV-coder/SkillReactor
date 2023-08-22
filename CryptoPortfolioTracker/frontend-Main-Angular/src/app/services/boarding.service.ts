import { HttpClient } from '@angular/common/http';
import { User} from '../models/user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})
export class AppServices {

  registerURL = 'https://components.skillreactor.io/CryptoPortfolioTracker/vidura/registration-service';
  loginURL = 'https://components.skillreactor.io/CryptoPortfolioTracker/vidura/login-service';

  constructor(
    private readonly http: HttpClient
    ){
  }

  registerUser(user:User): Observable<any> {
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(user);
    return this.http.post(this.registerURL, body,{'headers':headers, responseType: 'text', observe: 'response'})
  }

  loginUser(user:User): Observable<any> {
    const headers = { 'content-type': 'text/plain'};
    const body=JSON.stringify(user);
    return this.http.post(this.loginURL, body,{'headers':headers, responseType: 'text', observe: 'response'})
  }

}
