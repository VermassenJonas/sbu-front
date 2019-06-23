import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _userForm: FormGroup;
  public get userForm(): FormGroup {
    return this._userForm;
  }
  public set userForm(v: FormGroup) {
    this._userForm = v;
  }


  constructor(private authenticationService: AuthenticationService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }


  register() {
    let email = this.userForm.value.email;
    let password = this.userForm.value.password;
    this.authenticationService.login(email, password); //TODO : handle return


  }

}
