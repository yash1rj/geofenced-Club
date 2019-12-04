import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDsWBpK6Qa8G5ACTbdyEpkgICIm_ePq3zI',
      libraries: ['geometry']
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
