import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureDashboardAdminRoutingModule } from './feature-dashboard-admin-routing.module';

import { SharedModule } from 'src/app/shared';

import {
  PageAddClassComponent,
  PageEditClassComponent
} from './pages';

@NgModule({
  declarations: [
    PageAddClassComponent,
    PageEditClassComponent
  ],
  imports: [
    CommonModule,
    FeatureDashboardAdminRoutingModule,
    SharedModule
  ]
})
export class FeatureDashboardAdminModule { }