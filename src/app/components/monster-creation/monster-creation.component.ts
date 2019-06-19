import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Monster } from 'src/app/models/monster.model';
import { MonsterDataService } from 'src/app/services/monster-data.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-monster-creation',
  templateUrl: './monster-creation.component.html',
  styleUrls: ['./monster-creation.component.css']
})
export class MonsterCreationComponent implements OnInit {


  public monsterForm: FormGroup;

  public monster: Monster;



  private id: number;

 

  constructor(
    private route: ActivatedRoute,
    private monsterDataService: MonsterDataService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get("id"));

    this.monsterDataService.getMonster(this.id).subscribe(result => this.monster = result);


    this.monsterForm = this.fb.group({
      name: [this.monster.name],
      size: [this.monster.size],
      monsterType: [this.monster.monsterType],
      languages: [this.monster.languages],
      tags: [this.monster.tags],
      alignment: [this.monster.alignment],
      armourClass: [this.monster.armourClass],
      armourType: [this.monster.armourType],
      hitPoints: [this.monster.hitPoints],
      hpFormula: [this.monster.hpFormula],
      speed: [this.monster.speed],
      stats: [this.monster.stats],
      resistances: [this.monster.resistances],
      immunities: [this.monster.immunities],
      conditionImmunities: [this.monster.conditionImmunities],
      vulnerabilities: [this.monster.vulnerabilities],
      skills: [this.monster.skills],
      challengeRating: [this.monster.challengeRating],
      traits: [this.monster.traits],
      actions: [this.monster.actions],
      fluff: [this.monster.fluff],
      author: [this.monster.author],
      created: [this.monster.created],
      lastUpdated: [this.monster.lastUpdated],
    });

  }

  

}
