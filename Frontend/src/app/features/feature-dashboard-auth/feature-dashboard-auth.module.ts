import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureDashboardAuthRoutingModule } from './feature-dashboard-auth-routing.module';

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
    FeatureDashboardAuthRoutingModule,
    SharedModule
  ]
})
export class FeatureDashboardAuthModule { }