import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, ValidationErrors } from '@angular/forms';

import { FirestoreService } from '../../../common/core/service/firestore.service';
import { SharedService } from '../../../common/core/service/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Input() isPatient: boolean;
  @Input() isDoctor: boolean;
  @Input() isAdmin: boolean;

  form: FormGroup;
  isProcessing: boolean = false;
  isPatientFormInvalid: boolean = false;
  isDoctorFormInvalid: boolean = false;
  isAdminFormInvalid: boolean = false;

  constructor(
    @Inject(FormBuilder) public fb: FormBuilder,
    private firestoreService: FirestoreService,
    private sharedService: SharedService
  ) {
    this.form = fb.group({
      'patientNo': [ '', [ Validators.required ] ],
      'doctorNo': [ '', [ Validators.required ] ],
      'fullname': [ '', [ Validators.required, Validators.minLength(2), CustomValidator.containNum ] ],
      'email': [ '', [ Validators.required, Validators.email ] ],
      'password': [ '', [ Validators.required, Validators.minLength(6) ] ],
    });
  }

  get patientNoError(): ValidationErrors { return this.form.get('patientNo').errors; }
  get doctorNoError(): ValidationErrors { return this.form.get('doctorNo').errors; }
  get fullnameError(): ValidationErrors { return this.form.get('fullname').errors; }
  get emailError(): ValidationErrors { return this.form.get('email').errors; }
  get passwordError(): ValidationErrors { return this.form.get('password').errors; }

  ngOnInit() {
    this.form.valueChanges.subscribe(() => {

      const doctorCondition = this.form.get('doctorNo').valid && this.form.get('fullname').valid && this.form.get('email').valid && this.form.get('password').valid;
      this.isDoctorFormInvalid = doctorCondition;

      const patientCondition = this.form.get('patientNo').valid && this.form.get('fullname').valid && this.form.get('email').valid && this.form.get('password').valid;
      this.isPatientFormInvalid = patientCondition;

      const adminCondition = this.form.get('email').valid && this.form.get('password').valid;
      this.isAdminFormInvalid = adminCondition;

    });

    this.sharedService.panelChanged.subscribe((state) => {
      state ? this.form.reset() : 0;
    });
  }

  onClear(option: string) {

    option === 'patientNo'
      ? this.form.patchValue({
          'patientNo': ''
        })
      : option === 'doctorNo'
      ? this.form.patchValue({
          'doctorNo': ''
        })
      : option === 'fullname'
      ? this.form.patchValue({
          'fullname': ''
        })
      : option === 'email'
      ? this.form.patchValue({
          'email': ''
        })
      : option === 'password'
      ? this.form.patchValue({
          'password': ''
        }) : 0;

  }

  patientCreate() {

    delete this.form.value['doctorNo'];
    const userDetails = this.form.value;
    this.sharedService.snackbar('Processing... Please wait.', 10000000);

    this.isProcessing = true;
    this.firestoreService.createUser(userDetails, 'patient')
      .then((user: any) => (this.resetFormThen(user, 'patient')))
      .catch((e: any) => (this.resetFormCatch(e)));

  }

  doctorCreate() {

    delete this.form.value['patientNo'];
    const userDetails = this.form.value;
    this.sharedService.snackbar('Processing... Please wait.', 10000000);

    this.isProcessing = true;
    this.firestoreService.createUser(userDetails, 'doctor')
      .then((user: any) => (this.resetFormThen(user, 'doctor')))
      .catch((e: any) => (this.resetFormCatch(e)));

  }

  adminCreate() {

    delete this.form.value['patientNo'];
    delete this.form.value['doctorNo'];
    delete this.form.value['fullname'];
    const userDetails = this.form.value;
    this.sharedService.snackbar('Processing... Please wait.', 10000000);

    this.isProcessing = true;
    this.firestoreService.createUser(userDetails, 'admin')
      .then((user: any) => (this.resetFormThen(user, 'admin')))
      .catch((e: any) => (this.resetFormCatch(e)));

  }

  // helper functions

  private resetFormThen(user: any, option: string) {
    this.form.reset();
    this.isProcessing = false;
    this.sharedService.closeAllSnackBar();

    option === 'admin'
      ? this.sharedService.snackbar(`Successfully created an admin account.`)
      : option === 'patient'
      ? this.sharedService.snackbar(`Successfully created an account for ${user}.`)
      : option === 'doctor'
      ? this.sharedService.snackbar(`Successfully created an account for Dr. ${user}.`) : 0;
  }

  private resetFormCatch(e: any) {
    this.form.reset();
    this.isProcessing = false;
    this.sharedService.closeAllSnackBar();
    this.sharedService.snackbar(`Error: ${e.message}`);
  }

}

export class CustomValidator {
  static containNum(control: AbstractControl) {
    const CONTAIN_NUMBER_REGEXP: RegExp = /\d/;
    return CONTAIN_NUMBER_REGEXP.test(control.value) ? { containsNumber: true } : null;
  }
}
