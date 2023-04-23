import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedBarSearchComponent,
  SharedButtonComponent,
  SharedFormComponent,
  SharedItemClassroomComponent,
  SharedItemSoftwareComponent,
  SharedPanelBackgroundComponent,
  SharedPanelDragNDropComponent,
  SharedPanelFlowLayoutComponent
} from './components';

import { SharedLayoutFormComponent } from './layouts';

@NgModule({
  declarations: [
    SharedBarSearchComponent,
    SharedButtonComponent,
    SharedFormComponent,
    SharedItemClassroomComponent,
    SharedItemSoftwareComponent,
    SharedPanelBackgroundComponent,
    SharedPanelDragNDropComponent,
    SharedPanelFlowLayoutComponent,
    SharedLayoutFormComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SharedBarSearchComponent,
    SharedButtonComponent,
    SharedFormComponent,
    SharedItemClassroomComponent,
    SharedItemSoftwareComponent,
    SharedPanelBackgroundComponent,
    SharedPanelDragNDropComponent,
    SharedPanelFlowLayoutComponent,
    SharedLayoutFormComponent
  ]
})
export class SharedModule { }