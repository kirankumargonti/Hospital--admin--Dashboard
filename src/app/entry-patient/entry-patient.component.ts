import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../common/core/service/auth.service';
import { FirestoreService } from '../common/core/service/firestore.service';
import { DatabaseService } from '../common/core/service/database.service';
import { SharedService } from '../common/core/service/shared.service';

@Component({
  selector: 'app-entry-patient',
  templateUrl: './entry-patient.component.html',
  styleUrls: ['./entry-patient.component.scss']
})
export class EntryPatientComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private databaseService: DatabaseService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    // this.sharedService.loop();
  }

  onSignout() {
    this.authService.signOut().then(() => {
      this.databaseService.goOffline();
      this.firestoreService.disableNetwork().then(() => {
        this.router.navigate(['/']);
        this.sharedService.signOutSuccess();
      });
    });
  }

}
