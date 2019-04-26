import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RemarksComponent } from './remarks.component';

const routes: Routes = [
  { path: '', component: RemarksComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemarksRoutingModule { }
