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

  private fetchMonsters: Observable<Monster[]> = this.monsterDataService.monsters;

  constructor( private monsterDataService : MonsterDataService) { }

  ngOnInit() {
  }


  get monsters(){
    return this.fetchMonsters;
  }
}
