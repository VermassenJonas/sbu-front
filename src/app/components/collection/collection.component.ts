import { Component, OnInit } from '@angular/core';
import { Monster } from 'src/app/models/monster.model';
import { MonsterDataService } from 'src/app/services/monster-data.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  private _monsters : Monster[];
  private _myMonsters : Monster[];
  private _likedMonsters : Monster[];
  public get monsters() : Monster[] {
    return this._monsters;
  }
  public set monsters(v : Monster[]) {
    this._monsters = v;
  }

  constructor(private monsterDataService: MonsterDataService) {

  }

  ngOnInit() {
    this.monsterDataService.collection$.subscribe(result => this.monsters = result)

    this._monsters.forEach(monster => {
      if(monster.author.email == localStorage.getItem("userEmail")){
        this._myMonsters.push(monster);
      }else{
        this._likedMonsters.push(monster);
      }
    });
  }

}
