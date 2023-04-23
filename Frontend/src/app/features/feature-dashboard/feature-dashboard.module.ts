import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

import { SharedModule } from 'src/app/shared';

import {
  PageRequestSoftwaresComponent,
  PageAddSoftwareComponent
} from './pages';

@NgModule({
  declarations: [
    PageRequestSoftwaresComponent,
    PageAddSoftwareComponent
  ],
  imports: [
    CommonModule,
    FeatureDashboardRoutingModule,
    SharedModule
  ]
})
export class FeatureDashboardModule { }