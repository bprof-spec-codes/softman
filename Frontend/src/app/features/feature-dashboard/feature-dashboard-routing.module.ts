import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageRequestSoftwaresComponent } from './pages';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'request-softwares',
          component: PageRequestSoftwaresComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDashboardRoutingModule { }
