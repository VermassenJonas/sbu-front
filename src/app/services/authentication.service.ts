import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


function parseJwt(token) {
  if (!token) {
    return null;
  }
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  return JSON.parse(window.atob(base64));
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly _tokenKey = 'currentUser';
  private _user$: BehaviorSubject<string>;

  public redirectUrl: string;

  constructor(private http: HttpClient) {
    let parsedToken = parseJwt(localStorage.getItem(this._tokenKey));
    if (parsedToken) {
      const expires =
        new Date(parseInt(parsedToken.exp, 10) * 1000) < new Date();
      if (expires) {
        localStorage.removeItem(this._tokenKey);
        parsedToken = null;
      }
    }
    this._user$ = new BehaviorSubject<string>(
      parsedToken && parsedToken.unique_name
    );
  }

  get user$(): BehaviorSubject<string> {
    return this._user$;
  }

  get token(): string {
    const localToken = localStorage.getItem(this._tokenKey);
    return !!localToken ? localToken : '';
  }


  







  login(email: string, password: string): Observable<boolean> {

    return this.http
      .post(
        `${environment.apiUrl}/account`,
        { email, password },
        { responseType: 'text' }
      )
      .pipe(
        catchError(error => {
          console.log(error);
          return of(null);
        }),
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            console.log(email);
            localStorage.setItem("userEmail", email);
            console.log(localStorage.getItem("userEmail"));

            this._user$.next(email);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  logout() {
    if (this.user$.getValue()) {
      localStorage.removeItem(this._tokenKey);
      localStorage.removeItem("userEmail");
      this._user$.next(null);
    }
  }

  register(
    name: string,
    email: string,
    password: string
  ): Observable<boolean> {
    console.log(email);
    return this.http
      .post(
        `${environment.apiUrl}/account/register`,
        {
          name,
          email,
          password,
          passwordConfirmation: password
        },
        { responseType: 'text' }
      )
      .pipe(
        map((token: any) => {
          if (token) {
            localStorage.setItem(this._tokenKey, token);
            console.log(email);
            localStorage.setItem("userEmail", email);
            console.log(localStorage.getItem("userEmail"));

            this._user$.next(email);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  checkUserNameAvailability = (email: string): Observable<boolean> => {
    return this.http.get<boolean>(
      `${environment.apiUrl}/account/checkusername`,
      {
        params: { email }
      }
    );
  };
}

