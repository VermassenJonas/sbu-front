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
  
  private _badLoginAttempt : boolean;
  public get badLoginAttempt() : boolean {
    return this._badLoginAttempt;
  }
  public set badLoginAttempt(v : boolean) {
    this._badLoginAttempt = v;
  }
  


  constructor(private authenticationService: AuthenticationService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }


  login() {
    let email = this.userForm.value.email;
    let password = this.userForm.value.password;
    this.authenticationService.login(email, password).subscribe(
      result => {
        this.badLoginAttempt = !result;
      }
    );


  }

}
