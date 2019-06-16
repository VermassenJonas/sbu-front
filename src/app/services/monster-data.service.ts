import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Monster } from '../models/monster.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MonsterDataService {



  constructor(private http: HttpClient) { }


  get monsters$(): Observable<Monster[]> {
    return this.http.get(`${environment.apiUrl}/monster/`).pipe(

      map((list: any[]): Monster[] => list.map(Monster.fromJSON))
    );
  }
   getMonster = function(id : number) : Observable<Monster>{
    return this.http.get(`${environment.apiUrl}/monster/`).pipe(
    );
  }
  addNewMonster(monster: Monster) {
    return this.http.post(`${environment.apiUrl}/monster/`, monster.toJSON());
  }
  updateMonster(monster: Monster) {
    return this.http.put(`${environment.apiUrl}/monster/${monster.id}`, monster.toJSON());
  }
}
