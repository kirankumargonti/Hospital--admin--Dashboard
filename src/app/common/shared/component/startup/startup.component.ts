import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { AuthService } from '../../../core/service/auth.service';
import { SharedService } from '../../../core/service/shared.service';

import { LoginMainDialogComponent } from '../login-main-dialog/login-main-dialog.component';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss'],
  host: {
    '(document:keyup)': 'onKeyup($event)'
  }
})
export class StartupComponent implements OnInit {

  dialogRef: MatDialogRef<LoginMainDialogComponent>;

  constructor(
    private dialog: MatDialog,
    private authService: AuthService,
    private sharedService: SharedService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.dialogRef = this.dialog.open(LoginMainDialogComponent, {  });
      this.dialogRef.backdropClick().subscribe(() => {
        this.sharedService.reInitMainDialog();
        this.sharedService.snackbar('Select one to comtinue.')
      });
    });

    this.authService.signOut();
  }

  onKeyup(e) {
    if (e.which == 27) {
      this.sharedService.reInitMainDialog();
      this.sharedService.snackbar('Select one to comtinue.')
    }
  }

}
