import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  private _loggedIn : boolean;
  public get loggedIn() : boolean {
    return this._loggedIn;
  }
  public set loggedIn(v : boolean) {
    this._loggedIn = v;
  }
  

  constructor(
    private authService : AuthenticationService
  ) { }

  ngOnInit() {
    this.loggedIn = !!this.authService.email;
  }

  logOut(){
    this.authService.logout();
    window.location.reload();
  }

}
