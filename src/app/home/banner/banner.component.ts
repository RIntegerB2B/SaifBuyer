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
  bannerModel = [ {bannerImage: './../assets/images/pro1.jpg'},
   {bannerImage: './../assets/images/pro2.jpg'}, {bannerImage: './../assets/images/pro3.jpg'} ];
  adsProductModel = [{bannerImage: './../assets/images/prod001.jpg'},
   {bannerImage: './../assets/images/prod002.jpg'},
   {bannerImage: './../assets/images/prod003.jpg'},
   {bannerImage: './../assets/images/prod004.jpg'}, {bannerImage: './../assets/images/prod001.jpg'},
   {bannerImage: './../assets/images/prod002.jpg'},
   {bannerImage: './../assets/images/prod003.jpg'},
   {bannerImage: './../assets/images/prod004.jpg'} ];
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    /* this.getAllBanner();
    this.getAllProductAdds(); */
  }
  /* getAllBanner() {
    this.homeService.getBanners().subscribe(data => {
      this.bannerModel = data;
    }, err => {
      console.log(err);
    });
  } */
  /* getAllProductAdds() {
    this.homeService.getAds().subscribe(data => {
      this.adsProductModel = data;
    }, err => {
      console.log(err);
    });
  } */
}
