import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturePublicRoutingModule } from './feature-public-routing.module';

import { SharedModule } from 'src/app/shared';

import {
    PagePublicComponent
} from './pages';

@NgModule({
  declarations: [
    PagePublicComponent
  ],
  imports: [
    CommonModule,
    FeaturePublicRoutingModule,
    SharedModule
  ]
})
export class FeaturePublicModule { }