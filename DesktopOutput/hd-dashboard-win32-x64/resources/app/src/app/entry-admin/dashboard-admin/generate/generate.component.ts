import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as Chance from 'chance';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  form: FormGroup;
  @Input() isDoctor: boolean;
  @Input() isPatient: boolean;
  @Input() isAccount: boolean;

  constructor(@Inject(FormBuilder) public fb: FormBuilder) {
    this.form = fb.group({
      'patientForm': fb.group({
        'random': ''
      }),
      'doctorForm': fb.group({
        'random': ''
      }),
      'accountForm': fb.group({
        'fullname': '',
        'email': '',
        'password': ''
      })
    })
  }

  ngOnInit() {
    this.form.get('patientForm').get('random').disable();
    this.form.get('doctorForm').get('random').disable();
    this.form.get('accountForm').get('fullname').disable();
    this.form.get('accountForm').get('email').disable();
    this.form.get('accountForm').get('password').disable();
  }

  onGenerate(option?: string) {
    const fullname = this.form.get('accountForm').get('fullname').value;
    const email = this.form.get('accountForm').get('email').value;
    const password = this.form.get('accountForm').get('password').value;

    const chance = new Chance();
    const randomChance = chance.integer({min: 100000000000, max: 999999999999});
    const randomFullname = option === 'fullname' ? chance.name() : fullname;
    const randomEmail = option === 'email' ? chance.email() : email;
    const randomPassword = option === 'password' ? chance.geohash({ length: 7 }) : password;

    this.form.setValue({
      patientForm: { random: `PX-${randomChance}` },
      doctorForm: { random: `DX-${randomChance}` },
      accountForm: {
        fullname: randomFullname,
        email: randomEmail,
        password: randomPassword
      }
    });

  }

  onClipboard() {
  }
}
