import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

import { FirestoreService } from '../../../common/core/service/firestore.service';
import { SharedService } from '../../../common/core/service/shared.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  @Input() isPatient: boolean;
  @Input() isDoctor: boolean;

  form: FormGroup;
  reactivePatients: any;
  reactiveDoctors: any;
  patients: any[] = [];
  doctors: any[] = [];
  isFormInvalid: boolean = true;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private firestoreService: FirestoreService,
    private sharedService: SharedService
  ) {
    this.form = fb.group({
      'patient': [ '', [ Validators.required ] ],
      'doctor': [ '', [ Validators.required ] ],
    })
  }

  get patientError(): ValidationErrors { return this.form.get('patient').errors; }
  get doctorError(): ValidationErrors { return this.form.get('doctor').errors; }

  ngOnInit() {
    this.reactivePatients = this.form.get('patient').valueChanges
      .pipe(
        startWith(''),
        map(val => this.displayFn(val)),
        map(name => this.filterPatients(name))
      );

    this.reactiveDoctors = this.form.get('doctor').valueChanges
      .pipe(
        startWith(''),
        map(val => this.displayFn(val)),
        map(name => this.filterDoctors(name))
      );

    this.firestoreService.getPatientDetails()
      .subscribe((response) => (this.patients = response));

    this.firestoreService.getDoctorDetails()
      .subscribe((response) => (this.doctors = response));

    this.form.valueChanges.subscribe(() => {
      this.isFormInvalid = this.form.invalid;
    });

    this.sharedService.panelChanged.subscribe((state) => {
      state ? this.form.reset() : 0;
    });
  }

  onClear(option: boolean) {

    option
      ? this.form.patchValue({
          'patient': ''
        })
      : this.form.patchValue({
          'doctor': ''
        })


  }

  onFocus() {
    this.form.patchValue({
      'patient': this.form.get('patient').value || '',
      'doctor': this.form.get('doctor').value || ''
    });
  }

  displayFn(value: any): string {
    return value && typeof value === 'object' ? value.fullname : value;
  }

  filterPatients(val: string) {
    return val ? this._filter(this.patients, val) : this.patients;
  }

  filterDoctors(val: string) {
    return val ? this._filter(this.doctors, val) : this.doctors;
  }

  addPatientToDoctor() {
    const form = this.form.value;
    delete form.doctor['patientNo'];
    delete form.patient['doctorNo'];
    this.firestoreService.addPatientToDoctor(form);
  }

  addDoctorToPatient() {
    const form = this.form.value;
    delete form.doctor['patientNo'];
    delete form.patient['doctorNo'];
    this.firestoreService.addDoctorToPatient(form);
  }

  // helper functions

  private _filter(values: any[], val: string) {
    const filterValue = val.toLowerCase();
    return values.filter(value => value.fullname.toLowerCase().startsWith(filterValue));
  }

}
