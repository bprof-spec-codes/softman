import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureAuthRoutingModule } from './feature-auth-routing.module';

import { SharedModule } from 'src/app/shared';

import {
    PageLoginComponent
} from './pages';

@NgModule({
  declarations: [
    PageLoginComponent
  ],
  imports: [
    CommonModule,
    FeatureAuthRoutingModule,
    SharedModule
  ]
})
export class FeatureAuthModule { }