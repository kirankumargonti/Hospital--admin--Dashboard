import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryPatientRoutingModule } from './entry-patient-routing.module';
import { EntryMaterialModule } from '../common/core/module/material-patient/entry-material.module';

import { EntryPatientComponent } from './entry-patient.component';

import { FirestoreService } from '../common/core/service/firestore.service';
import { DatabaseService } from '../common/core/service/database.service';

@NgModule({
  imports: [
    CommonModule,
    EntryPatientRoutingModule,
    EntryMaterialModule
  ],
  declarations: [
    EntryPatientComponent
  ],
  providers: [
    FirestoreService,
    DatabaseService
  ]
})
export class EntryPatientModule { }
