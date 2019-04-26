import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPatientComponent } from './dashboard-patient.component';

const routes: Routes = [
  { path: '', component: DashboardPatientComponent, children: [
    { path: '', loadChildren: './page/page.module#PageModule' },
    { path: 'readings', loadChildren: './page/page.module#PageModule' },
    { path: 'remarks', loadChildren: './remarks/remarks.module#RemarksModule' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPatientRoutingModule { }
