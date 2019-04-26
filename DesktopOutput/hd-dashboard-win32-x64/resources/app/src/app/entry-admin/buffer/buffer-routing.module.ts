import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BufferComponent } from './buffer.component';

const routes: Routes = [
  { path: '', component: BufferComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BufferRoutingModule { }
