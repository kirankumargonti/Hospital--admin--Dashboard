import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartupComponent } from './common/shared/component/startup/startup.component';
import { BufferComponent } from './common/shared/component/buffer/buffer.component';

import { EntryGuard, ExitGuard } from './common/core/service/route-guards';

const routes: Routes = [
  { path: '', component: StartupComponent, canActivate: [ ExitGuard ] },
  { path: 'bf', component: BufferComponent, canActivate: [ ExitGuard ] },
  { path: 'p', loadChildren: './entry-patient/entry-patient.module#EntryPatientModule', canActivate: [ EntryGuard ] },
  { path: 'd', loadChildren: './entry-doctor/entry-doctor.module#EntryDoctorModule', canActivate: [ EntryGuard ] },
  { path: 'a', loadChildren: './entry-admin/entry-admin.module#EntryAdminModule', canActivate: [ EntryGuard ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
