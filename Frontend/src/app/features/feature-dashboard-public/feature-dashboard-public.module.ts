import { NgModule } from '@angular/core';

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
    SharedModule,
    FeatureDashboardPublicRoutingModule
  ]
})
export class FeatureDashboardPublicModule { }