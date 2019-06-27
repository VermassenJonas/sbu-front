import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonsterDataService } from 'src/app/services/monster-data.service';
import { Monster } from 'src/app/models/monster.model';

@Component({
  selector: 'app-monster-detail',
  templateUrl: './monster-detail.component.html',
  styleUrls: ['./monster-detail.component.css']
})
export class MonsterDetailComponent implements OnInit {

  
  private _id : number;
  public get id() : number {
    return this._id;
  }
  public set id(v : number) {
    this._id = v;
  }
  
  private _monster : Monster;
  public get monster() : Monster {
    return this._monster;
  }
  public set monster(v : Monster) {
    this._monster = v;
  }
  
  

  constructor(private route: ActivatedRoute,
    private monsterDataService: MonsterDataService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.id = parseInt(id);
    this.monsterDataService.getMonster(this.id).subscribe(result => {
      this.monster = Monster.fromJSON(result[0]);
    });
  }

}
