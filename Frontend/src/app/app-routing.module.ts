import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/feature-public/feature-public.module')
    .then(module => module.FeaturePublicModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/feature-dashboard/feature-dashboard.module')
    .then(module => module.FeatureDashboardModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/feature-auth/feature-auth.module')
    .then(module => module.FeatureAuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
