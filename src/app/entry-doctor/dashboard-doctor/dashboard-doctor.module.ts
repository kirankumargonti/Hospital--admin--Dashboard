import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardDoctorRoutingModule } from './dashboard-doctor-routing.module';
import { DashboardMaterialModule } from '../../common/core/module/material-doctor/dashboard-material.module';

import { DashboardDoctorComponent } from './dashboard-doctor.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardDoctorRoutingModule,
    DashboardMaterialModule
  ],
  declarations: [
    DashboardDoctorComponent
  ]
})
export class DashboardDoctorModule { }
