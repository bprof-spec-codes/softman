import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GuardUserService, GuardAdminService } from './core'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/feature-dashboard-public/feature-dashboard-public.module')
    .then(feature => feature.FeatureDashboardPublicModule)
  },
  {
    path: 'dashboard',
    canActivate: [GuardUserService],
    loadChildren: () => import('./features/feature-dashboard/feature-dashboard.module')
    .then(feature => feature.FeatureDashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/feature-dashboard-auth/feature-dashboard-auth.module')
    .then(feature => feature.FeatureDashboardAuthModule)
  },
  {
    path: 'admin',
    canActivate: [GuardAdminService],
    loadChildren: () => import('./features/feature-dashboard-admin/feature-dashboard-admin.module')
    .then(feature => feature.FeatureDashboardAdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
