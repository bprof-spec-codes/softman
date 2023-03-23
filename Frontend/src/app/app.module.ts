import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './core/components/navbar/navbar.component';

import { FeaturePublicComponent } from './features/feature-public/feature-public.component';

import { SharedButtonComponent } from './shared/components/shared-button/shared-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturePublicComponent,
    SharedButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
