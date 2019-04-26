import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

import { FirestoreService } from '../../../common/core/service/firestore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() isPatient: boolean;
  @Input() isDoctor: boolean;
  @Input() isAdmin: boolean;

  patientDoctors: Observable<any>;
  doctorPatients: Observable<any>;
  patientControl: FormControl;
  doctorControl: FormControl;
  reactivePatients: any;
  reactiveDoctors: any;
  patients: any[] = [];
  doctors: any[] = [];

  patient: any;
  doctor: any;

  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.patientControl = new FormControl('');
    this.doctorControl = new FormControl('');

    this.reactivePatients = this.patientControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.displayFn(val)),
        map(name => this.filterPatients(name))
      );

    this.reactiveDoctors = this.doctorControl.valueChanges
      .pipe(
        startWith(''),
        map(val => this.displayFn(val)),
        map(name => this.filterDoctors(name))
      );

    this.firestoreService.getPatientDetails(true)
      .subscribe((response) => (this.patients = response));

    this.firestoreService.getDoctorDetails(true)
      .subscribe((response) => (this.doctors = response));

    this.patientControl.valueChanges.subscribe((control) => {
      this.patient = control;
    });

    this.doctorControl.valueChanges.subscribe((control) => {
      this.doctor = control;
    });
  }

  onClear() {
    this.patientControl.reset();
    this.doctorControl.reset();
  }

  onFocus() {
    this.patientControl.patchValue(this.patientControl.value || '');
    this.doctorControl.patchValue(this.doctorControl.value || '');
  }

  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.fullname : value;
  }

  filterPatients(val: string) {
    this.patientDoctors = this.firestoreService.getPatientDoctors(val);
    return val ? this._filter(this.patients, val) : this.patients;
  }

  filterDoctors(val: string) {
    this.doctorPatients = this.firestoreService.getDoctorPatients(val);
    return val ? this._filter(this.doctors, val) : this.doctors;
  }

  private _filter(values: any[], val: string) {
    const filterValue = val.toLowerCase();
    return values.filter(value => value.fullname.toLowerCase().startsWith(filterValue));
  }

}
