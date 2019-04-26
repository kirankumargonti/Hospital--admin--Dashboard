import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PageRoutingModule } from './page-routing.module';
import { PageMaterialModule } from '../../../common/core/module/material-patient/page-material.module';

import { PageComponent } from './page.component';
import { MessageDoctorDialogComponent } from '../../../common/shared/component/message-doctor-dialog/message-doctor-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageRoutingModule,
    PageMaterialModule
  ],
  declarations: [
    PageComponent,
    MessageDoctorDialogComponent,
  ],
  entryComponents: [
    MessageDoctorDialogComponent
  ]
})
export class PageModule { }
