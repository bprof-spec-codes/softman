import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureAuthRoutingModule } from './feature-auth-routing.module';

import { SharedModule } from 'src/app/shared';

import {
    PageLoginComponent,
    PageRegisterComponent
} from './pages';

@NgModule({
  declarations: [
    PageLoginComponent,
    PageRegisterComponent
  ],
  imports: [
    CommonModule,
    FeatureAuthRoutingModule,
    SharedModule
  ]
})
export class FeatureAuthModule { }