import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureDashboardRoutingModule } from './feature-dashboard-routing.module';

import { SharedModule } from 'src/app/shared';

import {
  PageRequestSoftwaresComponent,
  PageAddSoftwareComponent,
  PageAddClassComponent
} from './pages';

import {
  FlowLayoutPanelComponent,
  ItemClassroomComponent,
  SearchBarComponent,
  BackgroundPanelComponent,
  FormComponent
} from './components';

@NgModule({
  declarations: [
    PageRequestSoftwaresComponent,
    PageAddSoftwareComponent,
    PageAddClassComponent,
    FlowLayoutPanelComponent,
    ItemClassroomComponent,
    SearchBarComponent,
    BackgroundPanelComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FeatureDashboardRoutingModule,
    SharedModule
  ]
})
export class FeatureDashboardModule { }