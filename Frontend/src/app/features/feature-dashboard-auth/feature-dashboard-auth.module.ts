import { NgModule } from '@angular/core';

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
    SharedModule,
    FeatureDashboardAuthRoutingModule
  ]
})
export class FeatureDashboardAuthModule { }