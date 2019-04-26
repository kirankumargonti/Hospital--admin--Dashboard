import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppProviderModule } from './app-provider.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginMainDialogComponent } from './common/shared/component/login-main-dialog/login-main-dialog.component';
import { LoginPatientDialogComponent } from './common/shared/component/login-patient-dialog/login-patient-dialog.component';
import { LoginDoctorDialogComponent } from './common/shared/component/login-doctor-dialog/login-doctor-dialog.component';
import { LoginAdminDialogComponent } from './common/shared/component/login-admin-dialog/login-admin-dialog.component';
import { BufferComponent } from './common/shared/component/buffer/buffer.component';

import { AuthService } from './common/core/service/auth.service';


import { Router, NavigationStart } from '@angular/router';
import { map } from 'rxjs/operators'



@NgModule({
  imports: [
    BrowserModule,
    AppProviderModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginMainDialogComponent,
    LoginPatientDialogComponent,
    LoginDoctorDialogComponent,
    LoginAdminDialogComponent,
    BufferComponent
  ],
  entryComponents: [
    LoginMainDialogComponent,
    LoginPatientDialogComponent,
    LoginDoctorDialogComponent,
    LoginAdminDialogComponent
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.state.pipe(
      map((user: any) => user !== null)
    ).subscribe((state) => {
      state ? 0 : this.router.navigate(['/']);
    });
  }
}
