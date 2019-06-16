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

  
  public loadingError$ = new Subject<string>();

  constructor(private http: HttpClient) { }


  get monsters(): Observable<Monster[]>{
    return this.http.get(`${environment.apiUrl}/monsters/`).pipe(
      catchError(error => {
        this.loadingError$.next(error.statusText);
        return of();
      }),
      tap((x: any[]) => {
        for (const y of x) {
          console.log(y);
        }
      }),
      map((list: any[]): Monster[] => list.map(Monster.fromJSON))
    );
  }
}
