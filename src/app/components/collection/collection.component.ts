import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster.model';
import { MonsterDataService } from 'src/app/services/monster-data.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  private _monsters: Monster[];
  public get monsters(): Monster[] {
    return this._monsters;
  }
  public set monsters(v: Monster[]) {
    this._monsters = v;
  }

  private _myMonsters: Monster[];
  public get myMonsters(): Monster[] {
    return this._myMonsters;
  }
  public set myMonsters(v: Monster[]) {
    this._myMonsters = v;
  }

  private _likedMonsters: Monster[];
  public get likedMonsters(): Monster[] {
    return this._likedMonsters;
  }
  public set likedMonsters(v: Monster[]) {
    this._likedMonsters = v;
  }


  constructor(private monsterDataService: MonsterDataService,
    private authService: AuthenticationService) {
      this.monsters = [];
      this.myMonsters = [];
      this.likedMonsters = [];

  }

  ngOnInit() {

    if (!this.authService.email) {
      window.location.assign("/login");
    }

    this.monsterDataService.collection$.subscribe(result => {
      this.monsters = result;
      console.log(this.monsters);
      this.monsters.forEach(monster => {
        if (monster.author.email == this.authService.email) {
          this.myMonsters.push(monster);
        } else {
          this.likedMonsters.push(monster);
        }
      });
    })

  }

}
