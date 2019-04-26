import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ReadingsRoutingModule } from './readings-routing.module';
import { ReadingsMaterialModule } from '../../../common/core/module/material-doctor/readings-material.module';

import { ReadingsComponent } from './readings.component';
import { SetTimeDialogComponent } from '../../../common/shared/component/set-time-dialog/set-time-dialog.component';
import { AddRemarksDialogComponent } from '../../../common/shared/component/add-remarks-dialog/add-remarks-dialog.component';
import { AllReadingsDialogComponent } from '../../../common/shared/component/all-readings-dialog/all-readings-dialog.component';

import { LatestSbpPipe } from '../../../common/shared/pipe/latest-sbp.pipe';
import { LatestDbpPipe } from '../../../common/shared/pipe/latest-dbp.pipe';
import { LatestHrPipe } from '../../../common/shared/pipe/latest-hr.pipe';
import { GetEmailPipe } from '../../../common/shared/pipe/get-email.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReadingsRoutingModule,
    ReadingsMaterialModule
  ],
  declarations: [
    ReadingsComponent,
    SetTimeDialogComponent,
    AddRemarksDialogComponent,
    AllReadingsDialogComponent,
    LatestSbpPipe,
    LatestDbpPipe,
    LatestHrPipe,
    GetEmailPipe
  ],
  entryComponents: [
    SetTimeDialogComponent,
    AddRemarksDialogComponent,
    AllReadingsDialogComponent
  ]
})
export class ReadingsModule { }
