import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BufferRoutingModule } from './buffer-routing.module';
import { BufferComponent } from './buffer.component';

@NgModule({
  imports: [
    CommonModule,
    BufferRoutingModule
  ],
  declarations: [
    BufferComponent
  ]
})
export class BufferModule { }
