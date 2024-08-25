import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    FooterComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzLayoutModule,
    NzCarouselModule,
    NzAvatarModule
  ],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: en_US },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
