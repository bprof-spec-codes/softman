import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedButtonComponent,
  SharedItemSoftwareComponent,
  SharedDragNDropComponent,
  SharedFormComponent,
  SharedBackgroundPanelComponent
} from './components';

import { SharedLayoutFormComponent } from './layouts';

@NgModule({
  declarations: [
    SharedButtonComponent,
    SharedItemSoftwareComponent,
    SharedDragNDropComponent,
    SharedFormComponent,
    SharedBackgroundPanelComponent,
    SharedLayoutFormComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SharedButtonComponent,
    SharedItemSoftwareComponent,
    SharedDragNDropComponent,
    SharedFormComponent,
    SharedBackgroundPanelComponent,
    SharedLayoutFormComponent
  ]
})
export class SharedModule { }