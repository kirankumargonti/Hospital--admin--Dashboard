import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryDoctorComponent } from './entry-doctor.component';

const routes: Routes = [
  { path: '', component: EntryDoctorComponent, children: [
    { path: '', loadChildren: './dashboard-doctor/dashboard-doctor.module#DashboardDoctorModule' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryDoctorRoutingModule { }
