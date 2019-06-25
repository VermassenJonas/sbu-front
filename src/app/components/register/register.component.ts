import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  private _userForm: FormGroup;
  public get userForm(): FormGroup {
    return this._userForm;
  }
  public set userForm(v: FormGroup) {
    this._userForm = v;
  }

  private _emailExists: boolean;
  public get emailExists(): boolean {
    return this._emailExists;
  }
  public set emailExists(v: boolean) {
    this._emailExists = v;
  }
  
  private _passwordMismatch : boolean;
  public get passwordMismatch() : boolean {
    return this._passwordMismatch;
  }
  public set passwordMismatch(v : boolean) {
    this._passwordMismatch = v;
  }
  



  constructor(private authenticationService: AuthenticationService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      passwordConfirm: ['']
    });
  }


  register() {
    let name = this.userForm.value.name;
    let email = this.userForm.value.email;
    let password = this.userForm.value.password;
    let passwordConfirm = this.userForm.value.passwordConfirm;

    if (!this.emailExists) {
      if (password == passwordConfirm) {
        this.authenticationService.register(name, email, password).subscribe(); //TODO: do smthng with answer
      }
    }

  }
  checkEmail() {
    this.authenticationService.checkUserNameAvailability(this.userForm.value.email).subscribe(
      result => this.emailExists = !result
    );
  }
  checkPasswords(){
    let password = this.userForm.value.password;
    let passwordConfirm = this.userForm.value.passwordConfirm;
    this.passwordMismatch = password != passwordConfirm
  }
}
