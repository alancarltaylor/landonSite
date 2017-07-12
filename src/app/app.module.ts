import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { TeaserComponent } from './teaser/teaser.component';
import { TicklerComponent } from './tickler/tickler.component';
import { ProductsComponent } from './products/products.component';
import { VideoComponent } from './video/video.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SiteMapComponent } from './site-map/site-map.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeBannerComponent,
    TeaserComponent,
    TicklerComponent,
    ProductsComponent,
    VideoComponent,
    PurchaseComponent,
    SiteMapComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
