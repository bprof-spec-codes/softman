import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared';

import { AppComponent } from './app.component';

import { NavbarComponent } from './core/components';

import { FeaturePublicComponent } from './features';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturePublicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
