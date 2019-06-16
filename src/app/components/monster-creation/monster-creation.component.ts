import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from 'src/app/models/monster.model';
import { MonsterDataService } from 'src/app/services/monster-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-monster-creation',
  templateUrl: './monster-creation.component.html',
  styleUrls: ['./monster-creation.component.css']
})
export class MonsterCreationComponent implements OnInit {

  private id: number;

  private fetchMonster$: Observable<Monster> = this.monsterDataService.getMonster(this.id);

  constructor(private route : ActivatedRoute, private monsterDataService : MonsterDataService) { }

  ngOnInit() {
    this.id = parseInt( this.route.snapshot.paramMap.get("id"));
  }

  get monster$(){
    return this.fetchMonster$;
  }

}
