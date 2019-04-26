import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryDoctorRoutingModule } from './entry-doctor-routing.module';
import { EntryMaterialModule } from '../common/core/module/material-doctor/entry-material.module';

import { EntryDoctorComponent } from './entry-doctor.component';

import { FirestoreService } from '../common/core/service/firestore.service';
import { DatabaseService } from '../common/core/service/database.service';

@NgModule({
  imports: [
    CommonModule,
    EntryDoctorRoutingModule,
    EntryMaterialModule
  ],
  declarations: [
    EntryDoctorComponent
  ],
  providers: [
    FirestoreService,
    DatabaseService
  ]
})
export class EntryDoctorModule { }
