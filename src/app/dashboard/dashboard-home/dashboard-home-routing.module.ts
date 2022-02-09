import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardHomePage } from './dashboard-home.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardHomePageRoutingModule {}
