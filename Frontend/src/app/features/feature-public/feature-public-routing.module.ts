import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PagePublicComponent
} from './pages';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: '',
          component: PagePublicComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturePublicRoutingModule { }
