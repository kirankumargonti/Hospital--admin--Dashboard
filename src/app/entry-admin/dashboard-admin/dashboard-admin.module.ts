import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { DashboardMaterialModule } from '../../common/core/module/material-admin/dashboard-material.module';

import { DashboardAdminComponent } from './dashboard-admin.component';
import { GenerateComponent } from './generate/generate.component';
import { RegisterComponent } from './register/register.component';
import { JoinComponent } from './join/join.component';
import { ListComponent } from './list/list.component';

import { FirestoreService } from '../../common/core/service/firestore.service';
import { DatabaseService } from '../../common/core/service/database.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClipboardModule,
    DashboardAdminRoutingModule,
    DashboardMaterialModule
  ],
  declarations: [
    DashboardAdminComponent,
    GenerateComponent,
    RegisterComponent,
    JoinComponent,
    ListComponent
  ],
  providers: [
    FirestoreService,
    DatabaseService
  ]
})
export class DashboardAdminModule { }
