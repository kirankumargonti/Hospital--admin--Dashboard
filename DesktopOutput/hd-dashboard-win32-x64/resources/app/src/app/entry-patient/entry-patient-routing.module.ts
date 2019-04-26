import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryPatientComponent } from './entry-patient.component';

const routes: Routes = [
  { path: '', component: EntryPatientComponent, children: [
    { path: '', loadChildren: './dashboard-patient/dashboard-patient.module#DashboardPatientModule' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryPatientRoutingModule { }
