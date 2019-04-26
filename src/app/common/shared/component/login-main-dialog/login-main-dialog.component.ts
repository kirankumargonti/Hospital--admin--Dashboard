import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { LoginPatientDialogComponent } from '../login-patient-dialog/login-patient-dialog.component';
import { LoginDoctorDialogComponent } from '../login-doctor-dialog/login-doctor-dialog.component';
import { LoginAdminDialogComponent } from '../login-admin-dialog/login-admin-dialog.component';

import { SharedService } from '../../../core/service/shared.service';

@Component({
  selector: 'app-login-main-dialog',
  templateUrl: './login-main-dialog.component.html',
  styleUrls: ['./login-main-dialog.component.scss']
})
export class LoginMainDialogComponent implements OnInit {

  dialogRef_MN: MatDialogRef<LoginMainDialogComponent>;
  dialogRef_PA: MatDialogRef<LoginPatientDialogComponent>;
  dialogRef_DO: MatDialogRef<LoginDoctorDialogComponent>;
  dialogRef_AD: MatDialogRef<LoginAdminDialogComponent>;

  option = '';

  constructor(
    private dialog: MatDialog,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
  }

  openPatient() {
    this.dialogRef_PA = this.dialog.open(LoginPatientDialogComponent, { data: '' });
    this.dialogRef_PA.backdropClick().subscribe(() => {
      this.sharedService.reInitMainDialog();
    });
  }

  openDoctor() {
    this.dialogRef_DO = this.dialog.open(LoginDoctorDialogComponent, { data: '' });
    this.dialogRef_DO.backdropClick().subscribe(() => {
      this.sharedService.reInitMainDialog();
    });
  }

  openAdmin() {
    this.dialogRef_AD = this.dialog.open(LoginAdminDialogComponent, { data: '' });
    this.dialogRef_AD.backdropClick().subscribe(() => {
      this.sharedService.reInitMainDialog();
    });
  }

  onProceed() {

    this.dialog.closeAll();

    switch (this.option) {
      case 'patient': {
        this.openPatient();
        break;
      }
      case 'doctor': {
        this.openDoctor();
        break;
      }
      case 'admin': {
        this.openAdmin();
        break;
      }
      default: {
        this.sharedService.reInitMainDialog();
      }

    }

  }

}
