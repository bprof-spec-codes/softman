import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

import { SharedModule } from 'src/app/shared';

import {
  PageRequestSoftwaresComponent,
  PageAddSoftwareComponent,
  PageAddClassComponent,
  PageEditClassComponent,
  PageManageClassesComponent
} from './pages';

import {
  FlowLayoutPanelComponent,
  ItemClassroomComponent,
  SearchBarComponent
} from './components';

@NgModule({
  declarations: [
    PageRequestSoftwaresComponent,
    PageAddSoftwareComponent,
    PageAddClassComponent,
    PageEditClassComponent,
    PageManageClassesComponent,
    FlowLayoutPanelComponent,
    ItemClassroomComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FeatureDashboardRoutingModule,
    SharedModule
  ]
})
export class FeatureDashboardModule { }