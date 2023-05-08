import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PageAddClassComponent,
  PageEditClassComponent,
  PageManageClaimsComponent
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
        },
        {
          path: 'manage-claims',
          component: PageManageClaimsComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDashboardAdminRoutingModule { }
