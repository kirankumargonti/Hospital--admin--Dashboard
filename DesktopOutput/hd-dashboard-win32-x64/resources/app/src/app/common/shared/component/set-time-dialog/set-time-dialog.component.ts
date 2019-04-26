import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

import { FirestoreService } from '../../../core/service/firestore.service';

@Component({
  selector: 'app-set-time-dialog',
  templateUrl: './set-time-dialog.component.html',
  styleUrls: ['./set-time-dialog.component.scss']
})
export class SetTimeDialogComponent implements OnInit {

  form: FormGroup;
  isDisabledButton: boolean = true;
  isDisabledInterval: boolean = true;
  duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  between = [];

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private firestoreService: FirestoreService
  ) {
    this.form = fb.group({
      'recipient': [ this.data.patient.fullname ],
      'duration': [ '' ],
      'between': [ '' ],
    })
  }

  ngOnInit() {
    this.form.get('recipient').disable();
    this.form.get('between').disable();

    this.initBetween();

    this.form.valueChanges.subscribe((response) => {

      const duration = !(response.duration === undefined || response.duration === null);
      const interval = !(response.between === undefined || response.between === null || response.between === '');

      this.isDisabledInterval = duration ? false : true;
      this.isDisabledButton = duration && interval ? false : true;

    });
  }

  initBetween() {
    this.between = [
      { number: 1, numbers: [0.5] },
      { number: 2, numbers: [0.5, 1] },
      { number: 3, numbers: [0.5, 1] },
      { number: 4, numbers: [0.5, 1, 2] },
      { number: 5, numbers: [0.5, 1] },
      { number: 6, numbers: [0.5, 1, 2, 3] },
      { number: 7, numbers: [0.5, 1] },
      { number: 8, numbers: [0.5, 1, 2, 4] },
      { number: 9, numbers: [0.5, 1, 3] },
      { number: 10, numbers: [0.5, 1, 2, 5] }
    ]
  }

  onChange(value: number) {
    if (value === undefined)  {
      this.form.get('between').setValue('');
      this.form.get('between').disable()
      return;
    }

    this.form.get('between').enable();
    this.initBetween();
    const filtered = this.between.filter(el => el.number === value);
    this.between = filtered[0].numbers;
  }

  onSubmit() {
    delete this.data.doctor['email'];
    delete this.data.doctor['password'];

    const duration = this.form.value.duration * 1000 * 60 * 60;
    const between = this.form.value.between * 1000 * 60 * 60;

    const setTime = {
      duration,
      between,
      to: this.data.patient,
      from: this.data.doctor
    };

    this.firestoreService.setTime(setTime);
    this.dialog.closeAll();
  }

}
