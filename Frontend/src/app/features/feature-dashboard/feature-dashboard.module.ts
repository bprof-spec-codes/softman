import { NgModule } from '@angular/core';

import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';
import { FeatureDashboardComponent } from './feature-dashboard.component';

import { PageRequestSoftwaresComponent } from './pages/page-request-softwares/page-request-softwares.component';

@NgModule({
  declarations: [
    PageRequestSoftwaresComponent
  ],
  imports: [
    FeatureDashboardRoutingModule
  ],
  providers: [],
  bootstrap: [FeatureDashboardComponent]
})
export class FeatureDashboardModule { }