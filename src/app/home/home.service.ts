import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSetting } from '../config/appSetting';
import { Observable, of } from 'rxjs';
import { Banner } from './../shared/model/banner.model';
import { Ads } from './../shared/model/ads.model';
import { Promotions } from './../shared/model/promotions.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  serviceUrl: string = AppSetting.serviceUrl;

  constructor(private httpClient: HttpClient) { }


  getBanners(): Observable<any> {
    const categoryUrl = 'banners';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Banner>(url);
  }
  getAds(): Observable<any> {
    const categoryUrl = 'ads';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Ads>(url);
  }
  getPromotions(): Observable<any> {
    const categoryUrl = 'promotions';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Promotions>(url);
  }
}
