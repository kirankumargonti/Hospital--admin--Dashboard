import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../common/core/service/auth.service';
import { FirestoreService } from '../common/core/service/firestore.service';
import { SharedService } from '../common/core/service/shared.service';

@Component({
  selector: 'app-entry-admin',
  templateUrl: './entry-admin.component.html',
  styleUrls: ['./entry-admin.component.scss']
})
export class EntryAdminComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService,
    private firestoreService: FirestoreService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
  }

  onSignout() {
    this.authService.signOut().then(() => {
      this.firestoreService.disableNetwork().then(() => {
        this.router.navigate(['/']);
        this.sharedService.signOutSuccess();
      });
    });
  }

}
