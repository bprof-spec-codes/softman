import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureDashboardPublicRoutingModule } from './feature-dashboard-public-routing.module';

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
    FeatureDashboardPublicRoutingModule,
    SharedModule
  ]
})
export class FeatureDashboardPublicModule { }