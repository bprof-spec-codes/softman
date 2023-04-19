import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PageRequestSoftwaresComponent,
  PageAddSoftwareComponent,
  PageAddClassComponent
} from './pages';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'request-softwares',
          component: PageRequestSoftwaresComponent
        },
        {
          path: 'add-software',
          component: PageAddSoftwareComponent
        },
        {
          path: 'add-class',
          component: PageAddClassComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDashboardRoutingModule { }
