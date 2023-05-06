import { NgModule } from '@angular/core';

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
    SharedModule,
    FeatureDashboardRoutingModule
  ]
})
export class FeatureDashboardModule { }