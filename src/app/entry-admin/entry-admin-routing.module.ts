import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntryAdminComponent } from './entry-admin.component';

const routes: Routes = [
  { path: '', component: EntryAdminComponent, children: [
    { path: '', loadChildren: './dashboard-admin/dashboard-admin.module#DashboardAdminModule' },
    { path: 'z', loadChildren: './buffer/buffer.module#BufferModule' }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryAdminRoutingModule { }
