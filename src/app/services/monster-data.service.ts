import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Monster } from '../models/monster.model';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {



  constructor(private http: HttpClient,
    private authService: AuthenticationService) { }


  get monsters$(): Observable<Monster[]> {
    return this.http.get(`${environment.apiUrl}/monster/`).pipe(
      map((list: any[]): Monster[] => list.map(Monster.fromJSON))
    );
  }
  get collection$(): Observable<Monster[]> {
    return this.http.get(`${environment.apiUrl}/monster/collection/${ this.authService.email}`).pipe(
      map((list: any[]): Monster[] => list.map(Monster.fromJSON))
    );
  }
  getMonster = function (id: number): Observable<Monster> {
    return this.http.get(`${environment.apiUrl}/monster/${id}`);
  }

  

  addNewMonster(monster: Monster) {
    let email =  this.authService.email;
    console.log(email);
    return this.http.post(`${environment.apiUrl}/monster/`, monster.toJSON(email));
  }
  updateMonster(monster: Monster) {
    let email = this.authService.email;
    console.log(email);
    let url = `${environment.apiUrl}/monster/${monster.id}`;
    return this.http.put(url, monster.toJSON(email)).subscribe();
  }
}
