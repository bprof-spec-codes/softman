import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PageLoginComponent
} from './pages';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'login',
          component: PageLoginComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureAuthRoutingModule { }
