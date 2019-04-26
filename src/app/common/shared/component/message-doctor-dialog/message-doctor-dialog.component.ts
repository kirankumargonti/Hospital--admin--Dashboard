import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

import { FirestoreService } from '../../../core/service/firestore.service';

@Component({
  selector: 'app-message-doctor-dialog',
  templateUrl: './message-doctor-dialog.component.html',
  styleUrls: ['./message-doctor-dialog.component.scss']
})
export class MessageDoctorDialogComponent implements OnInit {

  form: FormGroup;
  isDisable: boolean = true;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private firestoreService: FirestoreService
  ) {
    this.form = fb.group({
      'recipient': [ `Dr. ${data.doctor.fullname}` ],
      'message': [ '' ]
    })
  }

  ngOnInit() {
    this.form.get('recipient').disable();

    this.form.valueChanges.subscribe((response) => {

      this.isDisable = response.message.length < 10 ? true : false;

    });
  }

  onSubmit() {
    const to = this.data.doctor.fullname;
    const from = this.data.patient.fullname;
    const message = this.form.value.message;

    this.firestoreService.sendMessageToDoctor(to, from, message);
    this.dialog.closeAll();
  }

}
