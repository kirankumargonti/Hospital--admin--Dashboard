import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { Chance } from 'chance';
import * as moment from 'moment';

import { FirestoreService } from './firestore.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private vertical: MatSnackBarVerticalPosition = 'bottom';
  private horizontal: MatSnackBarHorizontalPosition = 'center';
  private snackbarRef: MatSnackBarRef<any>;

  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private firestoreService: FirestoreService,
    private databaseService: DatabaseService
  ) { }

  panelChanged = new Subject();

  reInitMainDialog() {
    this.router.navigate(['/', 'bf']);
  }

  snackbar(message: string, duration: number = 3500): MatSnackBarRef<SimpleSnackBar> {
    const config = new MatSnackBarConfig;
    config.duration = duration;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;

    return this.snack.open(message, '', config);
  }

  closeAllSnackBar() {
    this.snack.dismiss();
  }

  set setPanel(state: boolean) {
    this.panelChanged.next(state);
  }

  formError() {
    let config = new MatSnackBarConfig();
    config.duration = 2500;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;
    this.snack.open('Form error. Please try again.', '', config);
  }

  signInSuccess() {
    const message = 'Successfully signed in';
    let config = new MatSnackBarConfig();
    config.duration = 3500;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;
    this.snack.open(message, '', config)
      .afterDismissed().subscribe(() => {
        const message = 'Welcome to Hyperdetect';
        this.snack.open(message, '', config);
      });
  }

  signOutSuccess() {
    const message = 'Successfully signed out';
    let config = new MatSnackBarConfig();
    config.duration = 3500;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;
    this.snack.open(message, '', config);
  }

  signInError(error: any) {
    let config = new MatSnackBarConfig();
    config.duration = 7000;
    config.horizontalPosition = this.horizontal;
    config.verticalPosition = this.vertical;
    this.snack.open(error.message, '', config);
  }

  delay(amount: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, amount);
    });
  };

  async loop() {
    const p1 = 'PX-963309195986';
    const p2 = 'PX-743002104549';
    const p3 = 'PX-318419614038';
    const p4 = 'PX-685932403453';
    const p5 = 'PX-925742140063';
    const p6 = 'PX-978055815189';
    for (let i = 0; i < 5; i++) {
      const a = () => {
        let chance = new Chance();
        const timestamp = moment().format('X');
        let randomFloat1 = chance.floating({min: -30, max: 30, fixed: 2});
        let randomFloat2 = chance.floating({min: -30, max: 30, fixed: 2});
        let randomFloat3 = chance.floating({min: -30, max: 30, fixed: 2});
        let data = `sbpVal/${randomFloat1} dbpVal/${randomFloat2} hrVal/${randomFloat3} timestamp/${timestamp} patientNo/${p1}`;
        this.firestoreService.pushToReadings(data);

        chance = new Chance();
        randomFloat1 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat2 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat3 = chance.floating({min: -30, max: 30, fixed: 2});
        data = `sbpVal/${randomFloat1} dbpVal/${randomFloat2} hrVal/${randomFloat3} timestamp/${timestamp} patientNo/${p2}`;
        this.firestoreService.pushToReadings(data);

        chance = new Chance();
        randomFloat1 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat2 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat3 = chance.floating({min: -30, max: 30, fixed: 2});
        data = `sbpVal/${randomFloat1} dbpVal/${randomFloat2} hrVal/${randomFloat3} timestamp/${timestamp} patientNo/${p3}`;
        this.firestoreService.pushToReadings(data);

        chance = new Chance();
        randomFloat1 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat2 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat3 = chance.floating({min: -30, max: 30, fixed: 2});
        data = `sbpVal/${randomFloat1} dbpVal/${randomFloat2} hrVal/${randomFloat3} timestamp/${timestamp} patientNo/${p4}`;
        this.firestoreService.pushToReadings(data);

        chance = new Chance();
        randomFloat1 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat2 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat3 = chance.floating({min: -30, max: 30, fixed: 2});
        data = `sbpVal/${randomFloat1} dbpVal/${randomFloat2} hrVal/${randomFloat3} timestamp/${timestamp} patientNo/${p5}`;
        this.firestoreService.pushToReadings(data);

        chance = new Chance();
        randomFloat1 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat2 = chance.floating({min: -30, max: 30, fixed: 2});
        randomFloat3 = chance.floating({min: -30, max: 30, fixed: 2});
        data = `sbpVal/${randomFloat1} dbpVal/${randomFloat2} hrVal/${randomFloat3} timestamp/${timestamp} patientNo/${p6}`;
        this.firestoreService.pushToReadings(data);
      }
      a();
      await this.delay(1000);
    }
  }

  onPush(patientNo: string) {
    const chance = new Chance();
    const timestamp = moment().format('X');
    const randomFloat1 = chance.floating({min: -30, max: 30, fixed: 2});
    const randomFloat2 = chance.floating({min: -30, max: 30, fixed: 2});
    const randomFloat3 = chance.floating({min: -30, max: 30, fixed: 2});

    const data = `sbpVal/${randomFloat1} dbpVal/${randomFloat2} hrVal/${randomFloat3} timestamp/${timestamp} patientNo/${patientNo}`;

    this.firestoreService.pushToReadings(data);
  }

}
