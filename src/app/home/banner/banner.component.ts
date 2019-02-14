import { Component, OnInit } from '@angular/core';
import { HomeService } from './../home.service';
import { Banner } from './../../shared/model/banner.model';
import { Ads } from './../../shared/model/ads.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerModel: Banner;
  adsProductModel: Ads;
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.getAllBanner();
    this.getAllProductAdds();
  }
  getAllBanner() {
    this.homeService.getBanners().subscribe(data => {
      this.bannerModel = data;
    }, err => {
      console.log(err);
    });
  }
  getAllProductAdds() {
    this.homeService.getAds().subscribe(data => {
      this.adsProductModel = data;
    }, err => {
      console.log(err);
    });
  }
}
