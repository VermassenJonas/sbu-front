import { Component, OnInit } from '@angular/core';
import { MonsterDataService } from 'src/app/services/monster-data.service';
import { Monster } from 'src/app/models/monster.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-monster-creation',
  templateUrl: './monster-creation.component.html',
  styleUrls: ['./monster-creation.component.css']
})
export class MonsterCreationComponent implements OnInit {

  constructor(
    private monsterDataService: MonsterDataService,
    private authService: AuthenticationService) { }

  ngOnInit() {

    this.monsterDataService.addNewMonster(new Monster()).subscribe(result => {
      let monster = Monster.fromJSON(result)
      let id = monster.id;

      window.location.assign(`/monster-edit/${id}`);
    });
  }

}
