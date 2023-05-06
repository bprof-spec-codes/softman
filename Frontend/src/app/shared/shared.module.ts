import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedBarSearchComponent,
  SharedButtonComponent,
  SharedButtonCircleComponent,
  SharedFormComponent,
  SharedItemClassroomComponent,
  SharedItemSoftwareComponent,
  SharedPanelBackgroundComponent,
  SharedPanelDragNDropComponent,
  SharedPanelFlowLayoutComponent,
  SharedPopUpComponent
} from './components';

import { SharedLayoutFormComponent } from './layouts';

@NgModule({
  declarations: [
    SharedBarSearchComponent,
    SharedButtonComponent,
    SharedButtonCircleComponent,
    SharedFormComponent,
    SharedItemClassroomComponent,
    SharedItemSoftwareComponent,
    SharedPanelBackgroundComponent,
    SharedPanelDragNDropComponent,
    SharedPanelFlowLayoutComponent,
    SharedLayoutFormComponent,
    SharedPopUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SharedBarSearchComponent,
    SharedButtonComponent,
    SharedButtonCircleComponent,
    SharedFormComponent,
    SharedItemClassroomComponent,
    SharedItemSoftwareComponent,
    SharedPanelBackgroundComponent,
    SharedPanelDragNDropComponent,
    SharedPanelFlowLayoutComponent,
    SharedLayoutFormComponent,
    SharedPopUpComponent
  ]
})
export class SharedModule { }