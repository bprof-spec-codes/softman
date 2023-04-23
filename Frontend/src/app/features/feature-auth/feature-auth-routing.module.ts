import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  PageLoginComponent,
  PageRegisterComponent
} from './pages';

const routes: Routes = [
    {
      path: '',
      children: [
        {
          path: 'login',
          component: PageLoginComponent
        },
        {
          path: 'register',
          component: PageRegisterComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureAuthRoutingModule { }
