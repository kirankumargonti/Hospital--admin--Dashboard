import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadingsComponent } from './readings.component';

const routes: Routes = [
  { path: '', component: ReadingsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadingsRoutingModule { }
