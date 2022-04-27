import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './COMPONENTES/acercade/acercade.component';
import { BannerComponent } from './COMPONENTES/banner/banner.component';
import { HeaderComponent } from './COMPONENTES/header/header.component';
import { LogoApComponent } from './COMPONENTES/logo-ap/logo-ap.component';

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    BannerComponent,
    HeaderComponent,
    LogoApComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
