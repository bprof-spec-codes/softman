import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageRequestSoftwaresComponent } from './pages/page-request-softwares/page-request-softwares.component';

const routes: Routes = [
    { path: '', component: PageRequestSoftwaresComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureDashboardRoutingModule { }
