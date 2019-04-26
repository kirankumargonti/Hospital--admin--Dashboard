import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { SetTimeDialogComponent } from '../../../common/shared/component/set-time-dialog/set-time-dialog.component';
import { AddRemarksDialogComponent } from '../../../common/shared/component/add-remarks-dialog/add-remarks-dialog.component';
import { AllReadingsDialogComponent } from '../../../common/shared/component/all-readings-dialog/all-readings-dialog.component';

import { FirestoreService } from '../../../common/core/service/firestore.service';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss']
})
export class ReadingsComponent implements OnInit {

  dialogRef_AR: MatDialogRef<AddRemarksDialogComponent>;
  dialogRef_ST: MatDialogRef<SetTimeDialogComponent>;
  dialogRef_SR: MatDialogRef<AllReadingsDialogComponent>;

  doctorPatients: Observable<any>;
  doctorDetails: any;

  isUndefined: boolean = true;
  isLoadingList: boolean = true;

  constructor(
    private dialog: MatDialog,
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {

    this.firestoreService.getOnlineDoctor().subscribe((doctor) => {

      if (doctor === undefined) return;

      this.isUndefined = false;

      this.doctorDetails = doctor;

      this.doctorPatients = this.firestoreService.getDoctorPatients(doctor.fullname);

      this.doctorPatients.subscribe(() => (this.isLoadingList = false));

    });
  }

  // setTime(patient: any) {
  //   this.dialogRef_ST = this.dialog.open(SetTimeDialogComponent, { data: { patient, doctor: this.doctorDetails}});
  // }

  addRemarks(patient: any) {
    this.dialogRef_AR = this.dialog.open(AddRemarksDialogComponent, { data: { patient, doctor: this.doctorDetails} });
  }

  showAllReadings(patient: any) {
    this.dialogRef_SR = this.dialog.open(AllReadingsDialogComponent, { data: patient });
  }

}
