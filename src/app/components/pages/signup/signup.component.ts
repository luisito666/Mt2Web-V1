import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// importando interfaces
import { Account } from '../../../interfaces/account';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  `]
})
export class SignupComponent implements OnInit {

  sigupForm: FormGroup;

  checkbox: boolean;

  account: Account = {
    login: null,
    password: null,
    password_again: null,
    real_name: null,
    email: null,
    social_id: 1234567,
    checkbox: false
  }

  constructor() {
    this.sigupForm = new FormGroup({
      'login': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password_again': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'real_name': new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'social_id': new FormControl('', [
        Validators.required,
        Validators.pattern(".{7,7}")
      ]),
      'checkbox': new FormControl('', [
        Validators.required
      ])
    });
    this.sigupForm.reset(this.account);
   }

  ngOnInit() {
  }

  send() {
    let data = this.sigupForm.value;
    delete data.password_again;
    delete data.checkbox;
    console.log(data);
    this.sigupForm.reset(this.account);
  }


}
