import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

import { FirestoreService } from '../../../core/service/firestore.service';

@Component({
  selector: 'app-add-remarks-dialog',
  templateUrl: './add-remarks-dialog.component.html',
  styleUrls: ['./add-remarks-dialog.component.scss']
})
export class AddRemarksDialogComponent implements OnInit {

  form: FormGroup;
  isDisable: boolean = true;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private firestoreService: FirestoreService
  ) {
    this.form = fb.group({
      'recipient': [ this.data.patient.fullname ],
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
    const to = this.data.patient.fullname;
    const from = this.data.doctor.fullname;
    const message = this.form.value.message;

    this.firestoreService.sendRemarkToPatient(to, from, message);
    this.dialog.closeAll();
  }

}
