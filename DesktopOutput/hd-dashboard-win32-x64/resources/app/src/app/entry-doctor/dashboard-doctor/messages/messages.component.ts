import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { FirestoreService } from '../../../common/core/service/firestore.service';

import { ExpandMessagesDialogComponent } from '../../../common/shared/component/expand-messages-dialog/expand-messages-dialog.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  dialogRef: MatDialogRef<ExpandMessagesDialogComponent>;
  isLoading: boolean = true;

  patientMessages: Observable<any>;

  constructor(
    private dialog: MatDialog,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {

    this.firestoreService.getOnlineDoctor().subscribe((doctor) => {

      if (doctor === undefined) return;

      this.patientMessages = this.firestoreService.getPatientMessages(doctor.fullname);

      this.patientMessages.subscribe(() => (this.isLoading = false));

    });

  }

  expandMessages(message: any) {
    this.dialogRef = this.dialog.open(ExpandMessagesDialogComponent, { data: message });
  }

}
