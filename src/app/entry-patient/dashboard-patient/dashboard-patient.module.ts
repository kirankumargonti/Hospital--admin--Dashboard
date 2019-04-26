import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPatientRoutingModule } from './dashboard-patient-routing.module';
import { DashboardMaterialModule } from '../../common/core/module/material-patient/dashboard-material.module';

import { DashboardPatientComponent } from './dashboard-patient.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardPatientRoutingModule,
    DashboardMaterialModule
  ],
  declarations: [
    DashboardPatientComponent
  ]
})
export class DashboardPatientModule { }
