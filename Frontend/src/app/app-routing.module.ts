import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FeaturePublicComponent } from './features/feature-public/feature-public.component';

const routes: Routes = [
  { path: '', component: FeaturePublicComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
