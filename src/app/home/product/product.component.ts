import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {OwlCarousel} from 'ngx-owl-carousel';
import { Ads } from './../../shared/model/ads.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild('owlElement') owlElement: OwlCarousel;
  @Input() adsProductModel: Ads;
  sliderOptions = {items: 3, dots: false, nav: true, loop: true, slideBy: 3,
    // tslint:disable-next-line:max-line-length
    navText: ['<span><svg width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class=""><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="dark"></path></svg></span>',
    // tslint:disable-next-line:max-line-length
    '<span><svg width="14.6" height="27" viewBox="0 0 16 27"xmlns="http://www.w3.org/2000/svg" class="rightArrow"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="dark"></path></svg></span>'
    ] };
  imageSrc = [{name: './../../../assets/images/Chrysanthemum.jpg'},
  {name: './../../../assets/images/Desert.jpg'}, {name: './../../../assets/images/Hydrangeas.jpg'},
   {name: './../../../assets/images/Jellyfish.jpg'}, {name: './../../../assets/images/Hydrangeas.jpg'},
   {name: './../../../assets/images/Jellyfish.jpg'} ];
  constructor() { }

  ngOnInit() {
  }
}
