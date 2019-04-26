import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { FirestoreService } from '../../../common/core/service/firestore.service';

import { ExpandRemarksDialogComponent } from '../../../common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.scss']
})
export class RemarksComponent implements OnInit {

  dialogRef: MatDialogRef<ExpandRemarksDialogComponent>;
  isLoading: boolean = true;

  doctorsRemarks: Observable<any>;

  constructor(
    private dialog: MatDialog,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {

    this.firestoreService.getOnlinePatient().subscribe((patient) => {

      if (patient === undefined) return;

      this.doctorsRemarks = this.firestoreService.getDoctorsRemarks(patient.fullname);

      this.doctorsRemarks.subscribe(() => (this.isLoading = false));

    });

  }

  expandRemarks(remark: any) {
    this.dialogRef = this.dialog.open(ExpandRemarksDialogComponent, { data: remark });
  }

}
