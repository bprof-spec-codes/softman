import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PageAddClassComponent,
  PageEditClassComponent
} from './pages';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'add-class',
          component: PageAddClassComponent
        },
        {
          path: 'edit-class',
          component: PageEditClassComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDashboardAdminRoutingModule { }
