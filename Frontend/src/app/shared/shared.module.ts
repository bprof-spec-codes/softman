import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedButtonComponent,
  SharedItemSoftwareComponent,
  SharedDragNDropComponent
} from './components';

@NgModule({
  declarations: [
    SharedButtonComponent,
    SharedItemSoftwareComponent,
    SharedDragNDropComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SharedButtonComponent,
    SharedItemSoftwareComponent,
    SharedDragNDropComponent
  ]
})
export class SharedModule { }