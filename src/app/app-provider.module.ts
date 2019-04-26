import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs'

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule,
  MatIconModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';

import { SharedService } from './common/core/service/shared.service';

import { EntryGuard, ExitGuard } from './common/core/service/route-guards';

import { StartupComponent } from './common/shared/component/startup/startup.component';

import { environment } from "../environments/environment";

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
  ],
  exports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
  declarations: [
    StartupComponent,
  ],
  providers: [
    SharedService,
    EntryGuard,
    ExitGuard
  ]
})
export class AppProviderModule { }
