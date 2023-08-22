import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Asset} from '../models/asset.model';

@Injectable({providedIn:'root'})
export class DashboardServices {

  putDeleteAssetURL = 'https://components.skillreactor.io/CryptoPortfolioTracker/vidura/assets-service';
  getAssetURL = 'https://components.skillreactor.io/CryptoPortfolioTracker/vidura/portfolio-service';

  headers = { 'content-type': 'text/plain'};
  username = localStorage.getItem('username');

  constructor(
    private readonly http: HttpClient
    ){
  }

  addAsset(asset:Asset): Observable<any> {

    const usernameObject = {'username': this.username};

    const body = JSON.stringify({ ...usernameObject, ...asset });

    return this.http.post(this.putDeleteAssetURL, body,{'headers':this.headers, responseType: 'text', observe: 'response'})
  }

  getAssets(): Observable<any> {

    var params = {
      'username': this.username!.toString()
    };

    return this.http.get(this.getAssetURL, {'params': params,'headers':this.headers, responseType: 'json', observe: 'response'})
  }

  deleteAsset(asset: Asset): Observable<any> {
    var tempObject = {'username': this.username, token: asset.getToken(), quantity: asset.getQuantity(), action: "DELETE"};

    const body = JSON.stringify(tempObject);

    return this.http.post(this.putDeleteAssetURL, body,{'headers':this.headers, responseType: 'text', observe: 'response'})
  }
}
