import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardDoctorComponent } from './dashboard-doctor.component';

const routes: Routes = [
  { path: '', component: DashboardDoctorComponent, children: [
    { path: '', loadChildren: './readings/readings.module#ReadingsModule' },
    { path: 'readings', loadChildren: './readings/readings.module#ReadingsModule' },
    { path: 'message', loadChildren: './messages/messages.module#MessagesModule' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardDoctorRoutingModule { }
