import { Component, OnInit } from '@angular/core';
import { MonsterDataService } from "../../services/monster-data.service";
import { Observable } from 'rxjs';
import { Monster } from 'src/app/models/monster.model';

@Component({
  selector: 'app-monster-list',
  templateUrl: './monster-list.component.html',
  styleUrls: ['./monster-list.component.css']
})
export class MonsterListComponent implements OnInit {

  
  private _monsters : Monster[];
  public get monsters() : Monster[] {
    return this._monsters;
  }
  public set monsters(v : Monster[]) {
    this._monsters = v;
  }

  constructor(private monsterDataService: MonsterDataService) {

  }

  ngOnInit() {
    this.monsterDataService.monsters$.subscribe(result => this.monsters = result)
  }


  
}
