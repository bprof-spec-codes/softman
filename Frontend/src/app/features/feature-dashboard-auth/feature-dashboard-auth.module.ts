import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services';

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
  ],
  providers: [
    AuthService
  ]
})
export class FeatureDashboardAuthModule { }