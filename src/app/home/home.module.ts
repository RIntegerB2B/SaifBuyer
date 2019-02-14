import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { OwlModule } from 'ngx-owl-carousel';
import { MatCardModule} from '@angular/material/card';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [BannerComponent, ProductComponent, FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    OwlModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
