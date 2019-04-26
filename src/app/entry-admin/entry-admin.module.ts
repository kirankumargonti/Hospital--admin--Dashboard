import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EntryAdminRoutingModule } from './entry-admin-routing.module';
import { EntryMaterialModule } from '../common/core/module/material-admin/entry-material.module';

import { EntryAdminComponent } from './entry-admin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EntryAdminRoutingModule,
    EntryMaterialModule
  ],
  declarations: [
    EntryAdminComponent
  ]
})
export class EntryAdminModule { }
