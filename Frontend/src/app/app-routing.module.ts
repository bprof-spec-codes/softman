import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturePublicComponent } from './features';

const routes: Routes = [
  { path: '', component: FeaturePublicComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/feature-dashboard/feature-dashboard.module')
    .then(module => module.FeatureDashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
