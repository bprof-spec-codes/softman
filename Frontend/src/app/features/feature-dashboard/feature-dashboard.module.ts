import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

import { PageRequestSoftwaresComponent } from './pages/page-request-softwares/page-request-softwares.component';

import { FlowLayoutPanelComponent } from './components/flow-layout-panel/flow-layout-panel.component';

@NgModule({
  declarations: [
    PageRequestSoftwaresComponent,
    FlowLayoutPanelComponent
  ],
  imports: [
    CommonModule,
    FeatureDashboardRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class FeatureDashboardModule { }