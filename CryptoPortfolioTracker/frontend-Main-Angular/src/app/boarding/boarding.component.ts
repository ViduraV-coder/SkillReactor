import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

import { User } from '../models/user.model';
import { AppServices } from '../services/boarding.service'

@Component({
  selector: 'app-boarding',
  templateUrl: './boarding.component.html',
  styleUrls: ['./boarding.component.css']
})
export class BoardingComponent implements OnInit {
  registrationForm = this.formBuilder.group({
    username_field: null,
    email_field: null,
    password_field: null
  });

  loginForm = this.formBuilder.group({
    login_username_field: null,
    login_password_field: null
  });

  constructor(
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
    private readonly appServices: AppServices
  ) {
  }

  ngOnInit(): void {
  }

  public signupMessage = '';
  public loginMessage = '';

  onRegisterSubmit(): void {

    const username = this.registrationForm.value.username_field;
    const email = this.registrationForm.value.email_field;
    const password = this.registrationForm.value.password_field;

    if (username !== null && email !== null && password !== null && username !== '' && email !== '' && password !== ''){
      const user = new User(username, email, password);

      this.appServices.registerUser(user).subscribe((response) => {
        if (response.ok) {
          this.signupMessage = 'Successfully Registered';
        }},
        (error) => {
          this.signupMessage = 'Error: Register Failed';
        });
    }else {
      this.signupMessage = 'Error: Unable to signup, please fill all the details';
    }
  }

  onLoginSubmit(): void {
    const username = this.loginForm.value.login_username_field;
    const password = this.loginForm.value.login_password_field;

    if (username !== null && password !== null && username !== '' && password !== ''){
      const user = new User(username,'', password);
      this.appServices.loginUser(user).subscribe((response) => {
        if (response.ok) {
          this.loginMessage = 'login Successful';
          localStorage.setItem('username',  user.getName());
          this.router.navigate(['dashboard']);
        }},
        (error) => {
          this.loginMessage = 'Error: Unable to login, details do not match';
          });
    }else {
      this.loginMessage = 'Error: Unable to login, please fill all the details';
    }
  }

}
