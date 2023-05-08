import { NgModule } from '@angular/core';

import { FeatureDashboardAdminRoutingModule } from './feature-dashboard-admin-routing.module';

import { SharedModule } from 'src/app/shared';

import {
  PageAddClassComponent,
  PageEditClassComponent,
  PageManageClaimsComponent
} from './pages';

@NgModule({
  declarations: [
    PageAddClassComponent,
    PageEditClassComponent,
    PageManageClaimsComponent
  ],
  imports: [
    SharedModule,
    FeatureDashboardAdminRoutingModule
  ]
})
export class FeatureDashboardAdminModule { }